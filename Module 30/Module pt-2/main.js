var wakeuptime;
var dstime;
var sleeptime;
var noon;



function showcurrenTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
      var second = currentTime.getSeconds();

      var meridian = "AM";

      if(hours >= noon){
        meridian = "PM"
      }

      var clockTime = hours +":" +minutes + ":" +second + "" + meridian;
clock.innerText = clockTime;
changeImage();

};

var oneSecond = 1000;
setInterval(showcurrenTime,oneSecond);

function chanegeImage(){
    var time = new Date().getHours();
    console.log(time);

    var iamge = "img/ds_clock.png"
    var imageHTML = document.getElementById("timeImage");


    if(time == wakeuptime){
        image = "img/morning.gif";
    }
    else if(time == dstime){
        image = "image/class.gif"
    }
    else if(time == sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image;
};





function updayeClock(){
    var wakeupTime = document.getElementById('wakeupTimeSelector')
    wakeuptime = wakeupTimeSelector.value;

var dsTime = document.getElementById('dsTimeSelector')
    dstime = dsTimeSelector.value;

    var sleepTime = document.getElementById('sleepTimeSelector')
    sleeptime = sleepTimeSelector.value;
}

var saveButton = document.getElementById("saveButton")

saveButton.addEventListener("click",updateClock)


