---
Title: "Automating The Deployment of a Codeigniter/PHP Website with Deployer"
Date: 2017-01-29
Tags: ["php", "codeigniter", "programming"]
Slug: "automating-the-deployment-of-a-codeigniter-php-website-with-deployer"
---

About 4 months ago, I started using some of my free time to help build [Labocine.com](http://labocine.com/), an amazing new platform for science cinema.  The back-end is written using the PHP framework [Codeigniter](https://www.codeigniter.com/). Being at its early stage, the site was hosted on one of those traditional hosting providers. And the deployment of new features was done using the traditional ftp approach. After joining the project and as it grew, I decided to host it on a VPS and automate the deployment process. My goal for this post is to show you how you can easily automate the deployment of your Codeigniter web application, or any PHP web application for that matter.

Before we can proceed, you need to make sure of two things. First, your project needs to be version controlled and available on a git hosting service such as Github, Bitbucket or Gitlab. Second, you need to have ssh access to the server where your application is (to be) hosted. 

The deployment tool we are going to use is called [Deployer](https://deployer.org/). Let's start by installing it in our Codeigniter project. I recommend using composer for the installation. Assuming you have composer installed on your computer, run the following command in the root of your project repository. 
<pre><code class="php">
    composer require-dev deployer/deployer
</code></pre>

You should now have a `bin` folder along with a `deployer` folder inside the `vendor` folder in your application root. 

Now, while still in the root of the project repository, let's create a file called `deploy.php`. This file, called a `recipe`,  will contain the custom deployment configurations that Deployer will be relying upon to deploy your application. Following is an example `deploy.php`. 

<pre><code class="php7">
require 'recipe/codeigniter.php';
set('default_stage', 'live');
server('SERVER_NAME', 'SERVER_IP_ADDRESS')
    ->identityFile()
    ->user('YOUR_USERNAME_ON_SERVER')
    ->stage('live')
    ->env('deploy_path', '/var/www/html/app');
 set('repository', '-b branch-name git@github.com:test/SAMPLEREPO.git');
</code></pre>

Now let's go over the content of `deploy.php`. Since we are going to deploy a Codeigniter application , our `deploy.php` recipe needs to extend the Codeigniter recipe, and this is what we do in the second line. If you are using another framework, you can find the list of all the supported recipes [here](https://github.com/deployphp/deployer/tree/master/recipe). 
On the 3rd line, we set the default stage. The stage is more like an environment and in our case we set it to `live`. So, your stage could be development, staging etc. Next, we configure our server where our code will be deployed. We give the server a name, any name we want, and we provide its IP address. In the following line, we use `identityFile()` to tell Deployer that we want to connect to our server using ssh and the ssh keys are located in our `.ssh` folder. If your keys are located somewhere else or if they were created with a password you can still pass the the full path to your keys as follows:

<pre><code class="php">
identityFile("~/path_to_ssh_folder/id_rsa.pub","~/path_to_ssh_folder/id_rsa", "pass phrase");
</code></pre>

You can also configure Deployer to log into your server using a username and password, please see [the documentation](https://deployer.org/docs/servers) for an example on how to do that. In the next 3 lines we pass it the username with which to ssh into our server, we tie this server to a stage which is the default stage in this case, and we provide the path where our application should be deployed. The last thing we need to do is to  specify the git repository which contains the code to be deployed. It is important to note that in this example we are using one server, but you can configure however many servers you want in your `deploy.php`.

Now we are ready to deploy our app. In order to do so we just need to type, while in the root of our project,
<pre><code>php vendor/bin/dep deploy live</code></pre> or 
<pre><code>php vendor/bin/dep deploy SERVER_NAME</code></pre> Since we set the default stage to `live`, we can also just do `php vendor/bin/dep deploy`. 

After deploying, if something breaks, rolling back to the previous working version of your site is as easy as <pre><code>php vendor/bin/dep rollback live </code></pre> 

Imagine you create a new branch, work on it, commit and push your changes. In order to deploy those changes, you need to manually go into the `deploy.php` file and change the branch name in the last line: <pre><code>set('repository', '-b branch-name git@github.com:test/SAMPLEREPO.git');</code></pre>This is a bit tedious, isn't it? Instead, we can just create a pre-commit hook that will go and make that change for us every time we commit. Here is what my `.git/hooks/pre-commit` looks like:

<pre><code class="bash">
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
sed -i '$ d' deploy.php
echo "set('repository', '-b $branch git@github.com:test/SAMPLEREPO.git');">> deploy.php
git add deploy.php
</code></pre>

With something like that in place, I do not need to manually edit the `deploy.php`  every time I want to deploy a new branch. After a `git push` I can do a `dep deploy` and be sure that my latest changes on my new branch will get deployed. 

If you use Deployer in some other interesting ways, or if you use other tools for your deployment, please feel free to leave a comment below. 
