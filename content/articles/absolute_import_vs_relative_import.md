---
Title: "Python's relative VS absolute import."
Date: 2014-03-06 09:07
Tags: ["python", "programming"]
Slug: "python-relative-vs-absolute-import"
draft: true
---
Whether you are a beginner or an advanced Python programmer, you have probably used
```import``` in one of your programs. But did you know that Python supports two kinds of imports: absolute
and relative? If not, please read on.

To avoid confusion, let's start by defining the terms module and package. In Python, a module is any source file. It may expose classes, functions or global variables. A Python package, however, is a directory or folder containing one or more modules; also for a directory to be treated by Python as a package it must contain ```__init__.py``` file.
The Python ```import``` statement allows you to import modules (along with their content) defined elsewhere into the current source file or module.

If you wanted to import all the classes, functions, global variables of a module you would use the syntax ```import mymodule```. However, in earlier versions of Python, it was not clear whether the syntax ```import mymodule``` refers to a top level module or to a module inside the current package. Starting from Python 2.5, that syntax was decided to always refer to a module or package reachable from ```sys.path```. ```path``` is a list variable found inside the sys module, it contains a list of director names where Python looks for extension module.

