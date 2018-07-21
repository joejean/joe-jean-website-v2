---
Title: "How to run Python 2 and Python 3 together on Windows 7"
Date: 2014-08-31
Tags: ["python", "programming"]
Slug: "how-to-run-python-2-and-python-3-together-on-windows-7"
---

I have always wanted to have both Python 2 and Python 3 installed and running on my Windows 7 computer, but I feared that installation was going to be a nightmare. <!-- PELICAN_END_SUMMARY -->However, today I put my fear aside and dove right into the task.

At least two scenarios are possible. While my experience was with the first scenario, the second one is also possible. So here is how to approach each one:
###Scenario 1: Python 2, virtualenv and virtualenvwrapper are already installed

My Windows 7 laptop already had Python 2, virtualenv and virtualenvwrapper installed&mdash;so, I downloaded and installed
<a target="_blank" href="https://www.python.org/downloads/"> Python 3 </a>. By default, any virtual environment I create would use Python 2. In order to make them also use Python 3, I would create them with the following command: ```mkvirtualenv myenv -p c:\python3.4```


But then, within that virtual environment, if I wanted to use Python 3, I would still have to call it explicitly using the command: ```py -3``` otherwise it would still default to Python 2. I found this observation weird and  I decided to do a little experiment. I activated one of the virtual environments that were created without pointing to Python 3. Then, in the terminal I type: ```py -3``` and, bam, it worked. Therefore, I came to the conclusion that installing Python 3 on my windows was enough for me to still use it in my virtual environments whenever I want to. I don't have to explicitly point my virtual environments to Python 3 with the ```-p``` flag.

###Scenario 2: Python is not installed

If Python is not already installed on your computer, you should install Python 3. And at the beginning of your Python files you would just add ```#!python2``` or ```#!python3``` depending on whether you want to use version 2 or version 3 of Python. Then, in order to run any of your Python programs, you would type: ```py pythonfile.py```

Now, that I have both versions on my computer, I'm going to start exploring some of the interesting features of Python 3 while still keeping my Python code running.



