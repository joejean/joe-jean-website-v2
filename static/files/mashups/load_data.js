/*Filename load_data.js*/

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
