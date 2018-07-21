---
Title: "Is your Python loop followed by an else clause? If yes, read on"
Date: 2015-08-01
Tags: ["programming","python"]
Slug: "else-clause-in-python-loop"
---

Today I decided to start my day by reading about [common anti-patterns in Python](http://docs.quantifiedcode.com/python-code-patterns/) and how to fix them. An anti-pattern in the context of programming is a piece of code that solves a problem but that has the potential of having unintended bad consequences.

One of those anti-patterns is the use of an else clause right after a loop without a break statement. As the article explains, the else clause following a loop is only executed when the loop sequence becomes empty. That means if the loop does not specify a break statement the else clause will always execute because eventually the loop sequence will become empty. They provided the following example code to illustrate the point:

<pre><code>
def contains_magic_number(list, magic_number):
    for i in list:
        if i == magic_number:
            print "This list contains the magic number."
    else:
        print "This list does NOT contain the magic number."

contains_magic_number(range(10), 5)
# This list contains the magic number.
# This list does NOT contain the magic number.
</code></pre>

In the snippet of code above we see that because no ```break``` statement was specified inside the ```if``` block, the ```else``` clause ends up being executed; which is obviously not the intended behaviour in this case. This can be fixed by adding a ```break``` statement in the ```if``` block as shown below:

<pre><code>
def contains_magic_number(list, magic_number):
for i in list:
    if i == magic_number:
        print "This list contains the magic number."
else:
    print "This list does NOT contain the magic number."

contains_magic_number(range(10), 5)
# This list contains the magic number.
</code></pre>

Here because of the ```break``` statement the loop will print the message and exit if the magic number is found in the list, resulting in the ```else``` clause not being executed. So I think this is all great.

But I was looking at the code and thinking that one could take this one step further by removing the ```else``` clause and making the ```contains_magic_number()``` function return ```True``` or ```False``` depending on whether the magic number is found in the list or not. So the code for this alternative solution would look as follow:

<pre>
    <code>
def contains_magic_number(list, magic_number):
    for i in list:
        if i == magic_number:
            return True
    return False


if contains_magic_number(range(10), 5):
    print "This list contains the magic number."
else:
    print "This list does NOT contain the magic number."

#This list contains the magic number
    </code>
</pre>
What I like about this soulution is not only that it does not contain an ```else```clause but also the new ```contains_magic_number()```function is more reusable. Now we can easily use that function in parts of our code where we only need to check if the list contains the magic number and do something else other than printing a message on the screen. 



    




