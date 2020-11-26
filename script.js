var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var studytime = lunchtime + 2;
var evening = 18;

var showCurrentTime = function() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    // setting up hours
    if (hours >= noon);
    {
        meridian = "PM";
    }
    if (hours > noon);
    {
        hours = hours - 12;
    }

    // setting up mintues 
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // setting up seconds 

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};

var updateClock = function() {
    var time = new
    Date().getHours();
    var messageText;
    var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu82qJz1miDI0r7k97eNl68JtR2KIvgbHyVw&usqp=CAU";
    var timeEventsJs = document.getElementById("timeEvent");
    var constantimageJS = document.getElementById('constant-image');
    
    if (time == wakeuptime) {
        image = "https://media.makeameme.org/created/wake-up-its-a7fa9c.jpg";
        messageText = "wake up!";
    }
    else if (time == lunchtime)
    {
        image = "https://www.mememaker.net/api/bucket?path=static/img/memes/full/2014/Aug/21/19/oh-yeah-its-lunchtime-baby.jpg";
        messageText = "lets have lunch";
    }
    else if (time == studytime) 
    {
    image = "https://pics.me.me/i-is-time-to-study-my-dudes-28264906.png";
    messageText = '  ';
    }
    else if (time < noon)
    {
        image = "https://lh3.googleusercontent.com/proxy/KTKgWkSAgQZEeQW9-_rc_-0YTj4QATdoLC5kUw-3KVjbkVgSvJ41f1IAeZABZZPW2RAomMHfzYWZ9Pkzz_2NvtWZXqtG3g805gKKhg3k5t7BjMMwcsvhpL3zwCW6kCkcSifDnuHYqg";
        messageText = "Good morning";
    }
    else if (time >= evening)
    {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvK2mcpEBgriTC9er-jx6ZNYQKZOp5aeysbQ&usqp=CAU";
        messageText = "good evening";
    }
    else {
        image = "https://static.boredpanda.com/blog/wp-content/uploads/2016/08/funny-kids-sleeping-anywhere-125-57aaeafca9771__605.jpg";
        messageText = "good afternoon";
    }
    console.log (messageText);
    timeEventsJs.innerText = messageText;
    constantimage.src = image; 

    showCurrentTime();
};
updateClock();

// incrementing time 

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// activating wake-up selector

var wakeupTimeSelector = document.getElementById("wakeupTimeSelector");
var wakeUpEvent = function()
{
 wakeuptime = wakeupTimeSelector.value;   
};

wakeupTimeSelector.addEventListener("change", wakeUpEvent);

// activating lunch  selector 

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

// activating study time 

var studyTimeSelector = document.getElementById("studyTimeSelector");
var studyEvent = function() 
{
    studytime = studyTimeSelector.value;
};
studyTimeSelector.addEventListener("change", studyEvent);

