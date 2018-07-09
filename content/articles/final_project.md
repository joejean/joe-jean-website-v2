---
Title: "[Mashups Class] My Final Project"
Date: 2014-12-13
Tags: ["mashups", "programming", "javascript", "api"]
Slug: "my-final-project"
---

For my final project I decided to build something that I myself needed: a motivational quote API.
For quite some time I had been searching the web for a quotes API and I was not able to find anything interesting, so I built one.

I did not have any quotes. So I scraped [this webpage](http://www.inc.com/jeff-haden/top-350-inspiring-motivational-quotes-to-tweet-and-share.html) which contains a list of 150 inspirational quotes. Then I created a database with those quotes.

Once I got the database running, I planned a nice API whose documentation can be found [here](http://pumpmeup.herokuapp.com/apidoc). The next step was to implement the API using ExpressJS. This was a pretty easy and straightforward step.

After building and testing the API, I built a simple application on top of it. The application lets the user like quotes, add quotes to the database, retrieve the top 10 quotes, and search quotes that contain specific keywords. The application can be accessed [here](http://pumpmeup.herokuapp.com/).

One thing I was planning to include in the project was a sentiment analysis library. I installed [this one](https://www.npmjs.com/package/sentiment). I wanted to analyze every new quote that a user would submit and only save it to the database if it is a positive one. However, while doing some testing the sentiment analyzer gives a 90% negative score to the following quote:"Success is walking from failure to failure with no loss of enthusiasm". As a human, we can see that this is obviously a positive quote, even though it contains two negative words. But the sentiment analyzer is not as smart as we are. That's when I decided to give up on that feature. But I plan to get back to it and figure out a way to make it work.

All in all, this was a really fun project to hack and I look forward to improving it in the near future.

