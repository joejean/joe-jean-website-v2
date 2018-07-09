---
Title: "[Mashups Class] How to set a default value for a function's parameter in Javascript & first project idea"
Date: 2014-09-16
Tags: ["mashups", "programming", "javascript", "api"]
Slug: "how-to-set-default-value-for-function-parameter-in-javascript"
---

This week  my homework has two parts. In the first part, I have to solve the three exercises found <a href="http://eloquentjavascript.net/02_program_structure.html" target="_blank">at the end of chapter two</a> in the book Eloquent Javascript.<!-- PELICAN_END_SUMMARY --> In the second part, I have to describe what I'm thinking about doing for my first single page app project, how the data flow might work, and what the experience of a user visiting the site would be like.

### How to set a default value for function parameter in Javascript
The first exercise was to write a loop that makes seven calls to console.log to output the following triangle:

<pre>            #
            ##
            ###
            ####
            #####
            ######
            ####### </pre>



As my solution for this exercise, I decided to create a function&mdash;```drawRightTriangle(height)```&mdash; that would take a parameter called ```height``` which represents the height of the triangle. So, instead of seven calls to console.log, the program would make 3, 10, 12, etc. depending on the value provided by the user to the ```height``` parameter. I also wanted to  give a default value to the parameter ```height``` so that the user can alternatively call the function without passing any arguments, as in ```drawRightTriangle()```. Being a Python programmer, I quickly assumed
I could achieve this with a line as simple as ```drawRightTriangle(height==8)```, but it does not work like that in Javascript.
So, after a little bit of research, I found a <a href="http://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function" target="_blank">Stackoverflow thread</a> that shows how to do it using the "typeof" operator to test whether the paramter is ```undefined```. If it is, you assign it the default value, otherwise you just use it as it is, i.e , use the value provided by the user. The code is as follow: ```height = typeof height !== 'undefined'? height: 7;```. By the way, the ```?``` is called the ternary operator&mdash;```condition ? value_if_true : value_if_false```. I could have achieved the same thing by using ```if ... else```. Here are the solutions for all three exercises:
<pre>
    <code>
      // Solutions to exercises from chapter 2 of Eloquent Javascript

        //1- Looping a triangle
        var drawRightTriangle = function(height){
            //I give height a default value in case the user does not provide any value.
            height = typeof height !== 'undefined'? height: 7;
            block = " ";
            for (var i = 0; i < height; i++){
                block = block + "#";
                console.log(block);
            }
        }

        //2- FizzBuzz
        var fizzBuzz = function(lowerLimit,upperLimit){
            lowerLimit = typeof lowerLimit !== 'undefined' ? lowerLimit : 0;
            upperLimit = typeof upperLimit !== 'undefined' ? upperLimit : 100;

            for( var i = lowerLimit; i < upperLimit; i++){
              if ( i % 3 == 0 && i % 5 ==0){
                console.log(i + ": FizzBuzz");
              }
              else if (i % 3 == 0){
                console.log(i+ ": Fizz");
              }

              else if ( i % 5 == 0){
                console.log(i + ': Buzz');
              }
            }
        }

        //3 - Chess  Board
        var chessBoard = function(size){

            size = typeof size !== 'undefined'? size : 8;

            for (var i = 0; i < size; i++){
                var line= " "
                for(var j = 0; j < size; j++){
                if ( i % 2 == 0){
                    if ( j % 2 == 0)  line = line + "#";
                    else line = line + " ";
                }
                else {

                  if ( j % 2 == 0)  line = line + " ";
                  else line = line + "#";
                }

                }
                console.log(line);
            }
        }

</code>
</pre>

You can run and test these functions by opening <a href="/files/mashups/hmw_2.html" target="_blank"> this file </a>. Then, from that page open your browser's developer console&mdash;ctrl+shift+k in Firefox&mdash; and start playing around with the functions.


### First project idea
For my first single page app, I don't really know what I want to do yet. At this point, all I know for sure now is I want to make something cool. One not-so-cool idea I have so far is to use the NY Times API and a text to speech API in order to allow a robot to read the news to the user. Not-so-cool, right? I know. I promise to come up with somehting cool. Please stay tuned.
