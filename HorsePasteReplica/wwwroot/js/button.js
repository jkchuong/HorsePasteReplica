"use sctrict";

var connection = new signalR.HubConnectionBuilder().withUrl("/buttonHub").build();

// Disable buttons until connection is established
var buttons = document.getElementsByClassName("button");
Array.prototype.forEach.call(buttons, function (btn) {
    btn.disabled = true;
});

connection.start().then(function () {
    var buttons = document.getElementsByClassName("button");
    Array.prototype.forEach.call(buttons, function (btn) {
        btn.disabled = false;
    });
}).catch(function (err) {
    return console.error(err.toString());
});

// Action on click
connection.on("ReceiveButtonRed", function () {
    var redButton = document.getElementById("button1");
    redButton.style.color = "white";
    redButton.style.background = "red"
});

connection.on("ReceiveButtonBlue", function () {
    var redButton = document.getElementById("button2");
    redButton.style.color = "white";
    redButton.style.background = "blue"
});

connection.on("ReceiveButtonGreen", function () {
    var redButton = document.getElementById("button3");
    redButton.style.color = "white";
    redButton.style.background = "green"
});



// Click listeners
document.getElementById("button1").addEventListener("click", function (event) {
    connection.invoke("ChangeButtonRed").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("button2").addEventListener("click", function (event) {
    connection.invoke("ChangeButtonBlue").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("button3").addEventListener("click", function (event) {
    connection.invoke("ChangeButtonGreen").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
