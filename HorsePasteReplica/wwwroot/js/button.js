"use sctrict";

var connection = new signalR.HubConnectionBuilder().withUrl("/buttonHub").build();

// Disable buttons until connection is established
var buttons = document.getElementsByClassName("butn");
Array.prototype.forEach.call(buttons, function (btn) {
    btn.disabled = true;
});

connection.start().then(function () {
    var buttons = document.getElementsByClassName("butn");
    Array.prototype.forEach.call(buttons, function (btn) {
        btn.disabled = false;
    });
}).catch(function (err) {
    return console.error(err.toString());
});

// Action on click
connection.on("ReceiveButtonRed", function (buttonId) {
    var redButton = document.getElementById(buttonId);
    redButton.style.color = "white";
    redButton.style.background = "red"
});

connection.on("ReceiveButtonBlue", function (buttonId) {
    var redButton = document.getElementById(buttonId);
    redButton.style.color = "white";
    redButton.style.background = "blue"
});

connection.on("ReceiveButtonGreen", function (buttonId) {
    var redButton = document.getElementById(buttonId);
    redButton.style.color = "white";
    redButton.style.background = "green"
});

connection.on("ReceiveButtonBlack", function (buttonId) {
    var redButton = document.getElementById(buttonId);
    redButton.style.color = "white";
    redButton.style.background = "black"
});

connection.on("ReceiveShowAll", function () {
    var buttons = document.getElementsByClassName("butn");
    Array.prototype.forEach.call(buttons, function (btn) {
        if (btn.className == "butn redButton") {
            btn.style.color = "white";
            btn.style.background = "red"
        } else if (btn.className == "butn blueButton") {
            btn.style.color = "white";
            btn.style.background = "blue"
        } else if (btn.className == "butn greenButton") {
            btn.style.color = "white";
            btn.style.background = "green"
        } else {
            btn.style.color = "white";
            btn.style.background = "black"
        }
    });
});

// Click listeners
var buttons = document.getElementsByClassName("butn");
Array.prototype.forEach.call(buttons, function (btn) {
    if (btn.className == "butn redButton") {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonRed", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    } else if (btn.className == "butn blueButton") {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonBlue", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    } else if (btn.className == "butn greenButton") {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonGreen", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    } else {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonBlack", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    }
});

document.getElementById("spy").addEventListener("click", function (event) {
    connection.invoke("ShowAllButtons").catch(function (err) {
        return console.error(err.toString());
    });
});

//document.getElementById("button3").addEventListener("click", function (event) {
//    var buttonId = document.getElementById("button3").id;
//    connection.invoke("ChangeButtonGreen", buttonId).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});
