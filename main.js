const color = "Green";

let count = 0;

function postToGoogle(name, team) {
  $.ajax({
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLScs2XKNGz_FTGq4pfGXzeHPzlJeXslcx_8CZfmq_rGben_ASA/formResponse",                    //get this url in your browser
    data: { "entry.1457720493": name, "entry.72614171": team },                                                                    //get the name of the inputs from the page
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        count += 1;
        $("#counter").html(count);
      },
    },
  });
}

function submit(){
  postToGoogle($("#name").val(), color);
}


/* -- use this part if you want to send automatically -- */

//randomTimeLimit its a time will be generated randomly to look more human
function sendAfterTime(name, randomTimeLimit) { 
  let time = Math.floor(Math.random() * randomTimeLimit) + 1;
  setTimeout(function () {
    postToGoogle(name, color);
  }, time);
}

//send post after time plus a randomTime to look more human
function executeAfterTime(name, time, randomTimeLimit){
  setInterval(function () {
    sendAfterTime(name, 3000);
  }, time, randomTimeLimit);
}

//send a vote of name, after 3000ms + a time between 0 and 3000ms
//executeAfterTime("name", 5000, 2500);