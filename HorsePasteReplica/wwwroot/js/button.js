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



// Click listeners
var buttons = document.getElementsByClassName("button");
Array.prototype.forEach.call(buttons, function (btn) {
    if (btn.className == "button redButton") {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonRed", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    } else if (btn.className == "button blueButton") {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonBlue", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    } else {
        btn.addEventListener("click", function (event) {
            connection.invoke("ChangeButtonGreen", btn.id).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
    }


});

//document.getElementById("button1").addEventListener("click", function (event) {
//    var buttonId = document.getElementById("button1").id;
//    connection.invoke("ChangeButtonRed", buttonId).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});

//document.getElementById("button2").addEventListener("click", function (event) {
//    var buttonId = document.getElementById("button2").id;
//    connection.invoke("ChangeButtonBlue", buttonId).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});

//document.getElementById("button3").addEventListener("click", function (event) {
//    var buttonId = document.getElementById("button3").id;
//    connection.invoke("ChangeButtonGreen", buttonId).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});
