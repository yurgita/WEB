function init(){
//console.log("TEST");
$("#calendar").append("<h1>"+getMonthLT()+"</h1>");

var weekCount = getWeekCount();

var arSkaiciuojamDienas = false;

var currntDay = 0;

for(var i=0; i<weekCount; i++) {
   var weekBox = getWeekBox();

   for(var j=1; j<=7; j++) {
    var dayBox = getDayBox();

    dayBox.hide();


    if(j == 1){
       dayBox.addClass("clear");
     }

     if (j == getWeekDayFirst()) {
       arSkaiciuojamDienas = true;
     }

     if (j == 6 || j == 7) {
       dayBox.addClass("weeknd");
     }


     if(currntDay == getLastMonthDayDate().getDate()){
       arSkaiciuojamDienas = false;
     }

     if (arSkaiciuojamDienas) {
       currntDay++;
       var dienosElementas = getDiv();

       dienosElementas.addClass("dayStyle");

       dienosElementas.append(currntDay);
       dayBox.append(dienosElementas);
       dayBox.prop("id", "day" + currntDay);
     }

     weekBox.append(dayBox);
   }

   if(!arSkaiciuojamDienas) {
     break;
   }

   $("#calendar").append(weekBox);

   $(".day").each(function(index){
     $(this).delay(40*index).fadeIn(300);
   })
}

}
function getDayBox() {
  var div = getDiv();
  div.prop("class", "day");
  return div;
}

function getWeekBox() {
  var div = getDiv();
  div.prop("class", "week");
  return div;
}

function getDiv() {
  return $("<div></div>");
}

function getMonthLT()  {
  var months = [
    "Sausis" ,
    "Vasaris" ,
    "Kovas" ,
    "Balandis" ,
    "Gegužė" ,
    "Birželis" ,
    "Liepa" ,
    "Rugpjūtis" ,
    "Rugsėjis" ,
    "Spalis" ,
    "Lapkritis" ,
    "Gruodis"
  ];
  var currentMonth = getMonthNumber();
  return months[currentMonth];
}

function getMonthNumber() {
  var date = new Date ();
  return date.getMonth();
}

function getLastMonthDayDate() {
  var date = new Date();
  var newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return newDate;
}
//menesio pirmos dienos savaites diena
function getWeekDayFirst(){
  var currentMonthFirstDayDate = getMonthFirstDayDate();
  var weekDay = currentMonthFirstDayDate.getDay();

  if(weekDay == 0) {
    weekDay = 7;
  }

  return weekDay;
s}

function getMonthFirstDayDate() {
  var date = new Date();
  return newdate = new Date(date.getFullYear(), date.getMonth(), 1);
  return newdate;
}

function getWeekCount() {

  var lastMonthDay = getLastMonthDayDate();
  var magicNumber = lastMonthDay.getDate() + getWeekDayFirst();
  return Math.ceil(magicNumber / 7);

}


$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
