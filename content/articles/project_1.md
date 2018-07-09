---
Title: "[Mashups Class] First Project: San Francisco Graffiti Explorer"
Date: 2014-10-01
Tags: ["mashups", "programming", "javascript", "api"]
Slug: "first-project-san-francisco-graffiti-explorer"
---

For my first project for the Mashups class , I built a website --[available here](http://joejean.github.io/SF_Graffiti/)-- that allows the user to explore graffiti spots in San Fransisco. In this article,
I'm going to provide some details on how I went about building the project.

First of all, let me tell you some of the tools I used in this project. I used the
[graffiti dataset from DataSF](https://data.sfgov.org/City-Infrastructure/Graffiti-30-Days/p6sg-7yp7). This data set provides information--including geographic coordinates, status, and a photo when available-- about graffiti cases reported in the San Francisco area. I also used the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/). And finally, I used [Bootstrap](http://getbootstrap.com/) for the UI.

My intention was just to allow any graffiti lovers, no matter where they are in the world, to explore some of the graffiti spotted in the San Francisco area.

Essentially, the site includes a Google map that occupies half of the page. On the
map, there are markers. Each one represents the location of a graffiti spot. If the graffiti hasn't been washed out--it has an "open" status in the dataset--it is represented on the map with a blue marker. A black marker represents a graffiti that has been cleaned.

Since there are about a thousand graffiti in the dataset, when I load all of their respective markers on the map it looks pretty messy. Most markers would sit on top of one another. To fix this, I used a small library called [MarkerClusterer.js](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/docs/reference.html) which groups together all of the markers that are really close to each other. Then when the user clicks on the cluster, it displays all the markers that it contains.

When the user clicks on a given marker, two things happen: 1) the Google street view of the location of that graffiti is loaded on the left 2) on the specific marker is loaded an info window which list the name of the street, the status of the graffiti and if available a link to a picture of the graffiti.

The process I followed while building the site was simple.It was my first time working with the Google Maps API so I had to learn it. After learning the API, I thought about how I wanted the UI to look. Then I built the UI using mostly the Bootstrap framework with a some customization as well. After getting the UI  right, I wrote the JavaScript code. I used the functional style in my JavaScript code.

Currently, the site works and it looks fine, but I do think it needs some improvements. I plan to add a feature where the user can filter the types of graffiti they want to see--open, closed, with or without pictures available. I also would like to rewrite the JavaScript code using an object oriented programming style.

I will hopefully publish the second version soon.




