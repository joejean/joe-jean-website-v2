---
Title: "[Mashups Class] Playing with an open API"
Date: 2014-09-05
Tags: ["mashups", "programming", "javascript", "api"]
Slug: "playing-with-an-open-api"
---

As part of my first homework for <a href="https://github.com/craigprotzel/Mashups" target="_blank">Mashups: Creating with web API</a>, I had to first find, post and describe an API that returns JSON data.

### Initial Plan
After playing around with a couple of APIs, I decided to use the World Bank API. I like the fact that
one does not need a key to make requests to this API. And I also found the documentation
to be clear and useful.

I use the following url ```http://api.worldbank.org/incomeLevels/LIC/countries?format=json```
in order to get a list of countries with income level classified as low income. As you can see four parameters are used
in the url. "incomeLevels" is used for information about all levels of income, "LIC" is an acronym that stands for
Low Level Income, and "countries" is the list of countries. By default, the World Bank API returns XML data. Since I wanted JSON, I had to explicitly specify that in the request url using ```format=json```.

For the second part of the assignment, I created a small script that sends a request to the API with the url mentioned above
and display the data on a nicely formatted HTML page.  Even though my script was syntaxically correct, and the request to the server was successful &mdash; this is confirmed by the debugging info showed in my broswer's developer/Javascript console &mdash;I still could not retrieve any data returned by the API.

After doing some research about the issue, I found out that  the problem was due to an <a href="http://stackoverflow.com/questions/22186703/modifying-jquery-jsonp-callback-function">implementation issue with the World Bank API.</a>  If you want to learn more about the problem click the  previous link.

### Second Plan
So since the World Bank API was not doing the job, I did some more research and found another open&mdash;authentication free&mdash; API: The US government jobs API.
I use the following url ``` http://api.usa.gov/jobs/search.json?query=tech+jobs ```to request all open technology related positions offered by government agencies. And I got the data back, manipulated it and displayed it on an HTML page. The page can be accessed <a href="/files/mashups/hmw_1.html" target="_blank"> here. </a> And here is the JS code that does the job:

<pre><code class="js">
$(document).ready(function(){

$.ajax({

    url:"http://api.usa.gov/jobs/search.json?query=tech+jobs",
    type: "GET",
    dataType: "jsonp",

    success: function(data){
      $.each(data, function(index, job){
        // Those are for debugging purpose
        console.log(job.position_title);
        console.log(job.url)
        console.log(job.locations[0]);
        console.log(job.organization_name);

      // The following code will add the JSON content returned by the API to the DOM
      var tr = $('<tr/>')
        .appendTo($('table'));
      var td_1 = $('<td/>')
          .appendTo(tr);
      var td_2 = $('<td/>')
          .appendTo(tr);
      var aaa = $('<a/>')
        .attr('href',job.url)
        .attr('target','_blank')
        .addClass('job_title')
        .text(job.position_title)
        .append('<br />')
        .appendTo(td_1);
      var employer = $('<span/>')
          .addClass('employer')
          .text(job.organization_name)
          .appendTo(td_1);
      var span_state= $('<span/>')
          .addClass('state')
          .text(job.locations[0])
          .appendTo(td_2);
      });
    },

     error: function() {
        return console.log("Failed");
        }
});

});
</code></pre>


