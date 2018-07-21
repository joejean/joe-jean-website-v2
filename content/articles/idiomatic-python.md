---
Title: "5 Tips for writing more concise and elegant code in Python"
Date: 2014-03-06
Tags: ["python", "programming"]
Slug: "5-tips-for-writing-more-concise-elegant-python"
---

Last week, I was reviewing some of the first lines of code I wrote when I was learning python three years ago. While they worked, I now realise that
there are many things I could have done in a more elegant and concise way. Of course, when learning a new programming language one is always 
encouraged to build things from scratch, to write one's own functions, classes or methods to do things even when such code might already exists. 

This approach is definitely useful for a beginner. However, once one understands the basics, it is a good idea to start using code and techniques already 
provided --at least by the programming language itself. This will not only help you build things faster but also -- in most cases -- make your code more concise and readable. 
The following are five tips that you can start using today to make your python code more concise and elegant. 

### 1) Prefer the return statement to evaluate your expression and return its result for you
Sometimes you have a function that returns the result of an expression. Let's say it's a boolean expression, so the return value can be either 
true or false. One usually uses a  variable to store the result of the expression and then return that variable, such as this:
<pre><code>
def isEven(a):
	if (a % 2)==0:
		result = True
	else:
		result = False
	return result
</code></pre>
However, a more elegant way to reach the same result is to put the entire expression in the return statement and it will compute and return the result of the
expression as follow:
<pre><code>
def isEven(a):
	return (a % 2)==0
</code></pre>
This is possible because the return statement actually returns the result of evaluating an expression. And in case you are wondering, in python numbers eveluate to themselves.

### 2) Prefer Python's builtin ```format()``` function to format your strings
Imagine you have an object called "Player" which has attributes such has name and age. Now imagine that you have
a function called printPlayerInfo() that prints the player's information. One would usually uses the plus sign (+) to concatenate the string literals with
the string variables, such as this:
<pre><code>
def printPlayerInfo(Player):
	return "The player's name is "+Player.name+" and the player is "+str(Player.age)+" years old"
</code></pre>	
However, a more elegant way to do this is to use python's builtin format() function. Thus our function becomes:

<pre><code>
def printPlayerInfo(Player):
	return "The player Name is {Player.name} and the player is {Player.age} years old".format(Player=Player)
</code></pre>	
As you can see, in addittion to making your code more readable, the format function spares the programmer the extra burden of casting all numbers to strings.	

### 3) Prefer a tuple instead of a temporary variable when swaping the values of two variables
When one wants to swap the values of two variables, they usually use a third variable as a temporary storage for one of the two values. Let's imagine that 
we want to swap the values of the variables ```currentScore``` and ```prevScore```, one usually proceed as follow:

<pre><code>
currentScore = 34
prevScore = 23
temp = currentScore
currentScore = prevScore
prevScore = temp
</code></pre>

However, this can be done more elegantly using a python tuple:

<pre><code>
currentScore = 34
prevScore = 23
(currentScore, prevScore) = (prevScore, currentScore)
</code></pre>

### 4) Prefer list comprehension to create a new list out of an existing one
Imagine that you have a list of numbers,```firstList``` and you want to create a second list,```secondList```  with all the even numbers - we assume there are some- contained 
in ```firstList```. Usually one would proceed as follow:

<pre><code>
firstList = [2283, 4, 567, 236, 4458]
secondList = []

for val in firstList:
	if val % 2 == 0:
		secondList.append(val)
		
</code></pre>

However, a more elegant and pythonic way to do the same thing is to use list comprehension notation as follows:

<pre><code>
firstList = [2283, 4, 567, 236, 4458]
secondList = [ val for val in list1 if val%2 == 0]
</code></pre>
Well, some people might argue that the first method is more comprehensible than the second one. I would say that such a view is influenced by their knowledge of 
other programming languages. Furthermore, list comprehension is a python specific feature which is created to make code more beautiful and concise. 

### 5) Prefer the list's ```count()``` method to count the number of times an item appears on the list:
Imagine that you have a list that has a couple of names for example. And, let's say you want to count the number of times a certain name appears on the list.
Usually one would proceed as follow:

<pre><code>
nameList = ["aaa", "bbb", "aaa", "ccc", "ddd"]
count =0
for name in nameList:
	if name == "aaa":
		count += 1
		
</code></pre>
However, to achieve the same result you can simply use python's builtin list ```count()``` method as follow:

<pre><code> 
nameList = ["aaa", "bbb", "aaa", "ccc", "ddd"]
count = nameList.count("aaa")
</code></pre>

The python list data type has more of those useful builtin methods that can not only make your life easier but aslo make your code more readable and concise. 
You can find them in the <a href = "http://docs.python.org/2/tutorial/datastructures.html#more-on-lists" target="_blank"> python documentation.</a>
<br />
<br />
<br />
 
