$(document).ready(function() {
    $("#fwd").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $.get("/runforward", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    }).on('touchend mouseup', function(e){
        e.preventDefault();
        $.get("/stopmotion", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
    
    $("#bck").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $.get("/runbackward", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    }).on('touchend mouseup', function(e){
        e.preventDefault();
        $.get("/stopmotion", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });

    $("#fwdStop").click(function(e) {
        e.preventDefault();
        $.get("/moveforward", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
    $("#bckStop").click(function(e) {
        e.preventDefault();
        $.get("/movebackward", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
    $("#lft").click(function(e) {
        e.preventDefault();
        $.get("/moveleft", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
    $("#rgt").click(function(e) {
        e.preventDefault();
        $.get("/moveright", function(data, status){
            console.log("Data: ", data, "\nStatus: ", status);
        });
    });
    
    $("#armupStop").click(function(e) {
        e.preventDefault();
        $.get("/armup", function(data, status){
            console.log("Data: ", data, "\nStatus: ", status);
        });
    });
    $("#armdownStop").click(function(e) {
        e.preventDefault();
        $.get("/armdown", function(data, status){
            console.log("Data: ", data, "\nStatus: ", status);
        });
    });
    
    
    $("#armup").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $.get("/runarmup", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    }).on('touchend mouseup', function(e){
        e.preventDefault();
        $.get("/stopmotion", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
    
    $("#armdown").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $.get("/runarmdown", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    }).on('touchend mouseup', function(e){
        e.preventDefault();
        $.get("/stopmotion", function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });

});
