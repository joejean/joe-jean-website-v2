---
Title: "Continuous Integration and Continuous Delivery make life easier"
Date: 2015-02-28
Tags: ["python", "programming"]
Slug: "continuous-integration-and-continuous-delivery-make-my-life-easier"
---

I have been hearing the terms "continuous integration" and "continuous delivery" for quite some time. However, it wasn't until last week that I decided to not only learn more about them but also use them in my own projects.

What is continuous integration? Continuous integration (CI) is a development practice where developers push code to a central repository several times a day. Every time code is pushed to the repository an automated build is run to verify that the new code did not cause any errors/bugs in the system. After the build is complete, the system will notify you whether it was successful —i.e. the system passes all the test cases— or not. CI helps avoid problems that might arise when integrating or merging code from different developers on a team or when one developer is integrating their code with existing code in the main repository.

Continuous Delivery (CD), on the other end, automates the deployment of your new code to your production system as long as the build that ran during the integration step was successful. If the build is successful the CI/CD system will automatically pushes/deploys the code to production. If the build failed, the code won't be deployed to production.

Such system makes my life, as a developer, so much easier since all I need to care about now is write code and push it to GitHub.

So, I decided to set up a CI/CD for this blog. This was pretty easy using a platform called [CircleCi](https://circleci.com). They have a free plan which is just perfect for a small project like this blog.

I also set up CI/CD for another project but this time I used a tool called Jenkins on a virtual private server (VPS) running Ubuntu. Jenkins is a popular open source CI tool. This option requires more configuration than the previous one, but it is worth trying as it gives you a better understanding of how CI/CD works. So, if you would like to give it a try, you may find [this tutorial](http://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511) helpful.

Happy integrating/delivering!















