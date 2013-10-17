/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        app.lookup_location();
        setInterval(function(){
            app.lookup_location();
        },10000);
        alert('on');
        app.tilt();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onSuccess: function(position) {
        // your callback here 
    },
    onError: function(error) { 
        // your callback here
    },
    lookup_location: function() {
        if (geoPosition.init()) {
            geoPosition.getCurrentPosition(showGeo, showGeoError);
        }
    },
    showGeo: function(loc) {
      $("#geo").html("lat: " + loc.coords.latitude + "<br />long: " + loc.coords.longitude);
    },
    showGeoError: function() {
      $("#geo").html('Unable to determine your location.');
    },
    tilt: function(x,y) {
        x = (x == null) ? 0 : Math.floor(x);
        y = (y == null) ? 0 : Math.floor(y);
        $("#gyro").html("x: " + x + "<br />y: " + y);
        var rgb = "rgb(" + (120 + (x * 10)) + "," + (120 + (y * 10)) + ",0)";
        //console.log("rgb: "+rgb);
        $("#gyro").css({"background-color":rgb});
    }
};
