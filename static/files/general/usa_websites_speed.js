
var API_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?';
//PageSpeed API key:
var API_KEY = 'AIzaSyDjGFiLuWMaXN6usMdpSqocr79la6gXpYU';
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['table','corechart']});

var URL_DATA = [
    "Google.com",
    "Facebook.com",
    "Youtube.com",
    "Amazon.com",
    "Yahoo.com",
    "Wikipedia.org",
    "Ebay.com",
    "Twitter.com",
    "Reddit.com",
    "Netflix.com",
    "Craigslist.org",
    "Linkedin.com",
    "Pinterest.com",
    "Live.com",
    "Bing.com",
    "Imgur.com",
    "Go.com",
    "Instagram.com",
    "Diply.com",
    "Chase.com",
    "Paypal.com",
    "Tumblr.com",
    "Msn.com",
    "Cnn.com",
    "Bankofamerica.com",
    "Espn.go.com",
    "Zillow.com",
    "Imdb.com",
    "Walmart.com",
    "Wellsfargo.com",
    "Nytimes.com",
    "Blogspot.com",
    "Yelp.com",
    "Weather.com",
    "Office.com",
    "Apple.com",
    "Homedepot.com",
    "Aol.com",
    "Comcast.net",
    "Wordpress.com",
    "Etsy.com",
    "Microsoftonline.com",
    "Microsoft.com",
    "Target.com",
    "Huffingtonpost.com",
    "Foxnews.com",
    "Washingtonpost.com",
    "Wikia.com",
    "Xfinity.com",
    "Buzzfeed.com",
    "Capitalone.com",
    "Dropbox.com",
    "Pornhub.com",
    "Indeed.com",
    "Outbrain.com",
    "Tripadvisor.com",
    "Pandora.com",
    "Hulu.com",
    "Bestbuy.com",
    "Salesforce.com",
    "Gfycat.com",
    "Americanexpress.com",
    "Groupon.com",
    "Usps.com",
    "Googleusercontent.com",
    "Slickdeals.net",
    "Twitch.tv",
    "Github.com",
    "Lowes.com",
    "Stackoverflow.com",
    "Att.com",
    "Ups.com",
    "Vice.com",
    "Citi.com",
]


// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
var callbacks = {}
var mobileSpeeUsabilityData = [];
var desktopSpeedData = [];


// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.

function runPagespeedMobile(website) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + 'http://'+website,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
    'strategy=mobile'
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

function runPagespeedDesktop(website) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + 'http://'+website,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
    'strategy=desktop'
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == 'yourAPIKey') {
        console.log('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        console.log(errors[i].reason+":"+errors[i].message);
      }
    }
    return;
  }
  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks) {
    var f = callbacks[fn];
    if (typeof f == 'function') {
      callbacks[fn](result);
    }
  }
}
function getWebSiteDomain(websiteUrl){
  var url = document.createElement('a');
  url.href = websiteUrl;
  var result = url.hostname;
  if(result.indexOf("www.") == 0){
    result = result.slice("4");
  }
  return result;
}

callbacks.processResults = function(result){
  var website_name = getWebSiteDomain(result.id);
  if (result.ruleGroups.USABILITY){
      mobileSpeeUsabilityData.push([website_name, result.ruleGroups.SPEED.score,result.ruleGroups.USABILITY.score,website_name]);
      mobileSpeeUsabilityData.sort(function(a,b,c){return b[1]- a[1]});
      // Set a callback to run when the Google Visualization API is loaded.
      /*google.charts.setOnLoadCallback(*/
      google.charts.setOnLoadCallback(drawMobileChart(mobileSpeeUsabilityData));
  } else{

      desktopSpeedData.push([website_name, result.ruleGroups.SPEED.score]);
      desktopSpeedData.sort(function(a,b){return b[1]- a[1]});
       // Set a callback to run when the Google Visualization API is loaded.*/
      google.charts.setOnLoadCallback(drawDesktopSpeedChart(desktopSpeedData));
  }
  

}
// Invoke the callback that fetches results. Async here so we're sure
// to discover any callbacks registered below, but this can be
// synchronous in your code.
  

var i = 1;                     //  set your counter to 1
var j= 0;

//This function sends 1 request per second to the Google Page Speed API
function sendRequests () { 
  // call a 1s setTimeout when the loop is called         
   setTimeout(function () { 
      runPagespeedMobile(URL_DATA[j]);          
      runPagespeedDesktop(URL_DATA[j]); 
      j++;
      i++;  
      // if the counter < URL_DATA.length, sendRequests();              
      if (i < URL_DATA.length) {            
         sendRequests();              
      }  
   }, 500)
}
sendRequests();


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawMobileChart(mobileData){
  // Create the data table.
  var mobileSpeedData = new google.visualization.DataTable();

  mobileSpeedData.addColumn('string', 'Website');
  mobileSpeedData.addColumn('number', 'Speed Score');
  mobileSpeedData.addColumn('number', 'Usability Score');
  mobileSpeedData.addColumn({type:'string', role:'annotation'});
  
  for(var i =0; i< mobileData.length; i++){
    mobileSpeedData.addRows([mobileData[i]]);
  }

  // Set chart options
  var options = {'title':'Speed & Usability Scores For US Websites',
                'titlePosition':'out',
                 'width':900,
                 'height':3000,
                 'colors': ['#b0120a', '#ffab91'],
                 'chartArea':{ top:45},
                 'legend': {'position': 'top'},
                 'hAxis': {
                           'minValue': 0
                          },
               };

  var tableOptions =  {
          width: '100%', 
          height: '100%', 
          page:'enable', 
          pageSize:16,
          showRowNumber: true,
          cssClassNames:{

          }
        }
  var view = new google.visualization.DataView(mobileSpeedData);
  view.setColumns([0, 1, 2]);

  var table = new google.visualization.Table(document.getElementById('mobile_speed_usability_table'));
  table.draw(view,tableOptions); 

  // Instantiate and draw our chart, passing in some options.
  var mobileSpeedChart = new google.visualization.BarChart(document.getElementById('mobile_speed_usability_chart'));
  mobileSpeedChart.draw(view, options);

  google.visualization.events.addListener(table, 'sort',
        function(event) {
          mobileSpeedData.sort([{column: event.column, desc: !event.ascending}]);
          mobileSpeedChart.draw(view, options);
        });
}

function drawDesktopSpeedChart(desktopSpeed){
  // Create the data table.
  var desktopSpeedData = new google.visualization.DataTable();
 
  desktopSpeedData.addColumn('string', 'Website Name');
  desktopSpeedData.addColumn('number', 'Speed Score');
  
  for(var i =0; i< desktopSpeed.length; i++){
    desktopSpeedData.addRows([desktopSpeed[i]]);
  }

  // Set chart options
  var options = {'title':'Speed Scores On Desktop For US Websites',
                'titlePosition':'out',
                 'width':900,
                 'height':3000,
                 'colors': ['#b0120a', '#ffab91'],
                 'chartArea':{ top:45},
                 'legend': {'position': 'top'},
                 'hAxis': {
                           'minValue': 0
                          },
              
  };

  var tableOptions =  {
          width: '100%', 
          height: '100%', 
          page:'enable', 
          pageSize:16,
          showRowNumber: true,
          cssClassNames:{

          }
        };               
              
  var view = new google.visualization.DataView(desktopSpeedData);
  view.setColumns([0, 1]);

  var table = new google.visualization.Table(document.getElementById('desktop_speed_table'));
  table.draw(view, tableOptions); 


  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('desktop_speed_chart'));
  chart.draw(view, options);

  google.visualization.events.addListener(table, 'sort',
    function(event) {
      desktopSpeedData.sort([{column: event.column, desc: !event.ascending}]);
       chart.draw(view, options);
    });
}
