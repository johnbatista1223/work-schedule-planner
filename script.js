var savedButton = $('.btn');

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm:ss");
console.log(time);

var currentHour = moment().format('H');
console.log(currentHour);

var nineAm = $('#color-9am');
var tenAm = $('#color-10am');
var elevenAm = $('#color-11am');
var twelvePM = $('#color-12pm');
var onePm = $('#color-1pm');
var twoPm = $('#color-2pm');
var threePm = $('#color-3pm');
var fourPm = $('#color-4pm');
var fivePm = $('#color-5pm');
var sixPm = $('#color-6pm');
var sevenPm = $('#color-7pm');
var eightPm = $('#color-8pm');
var ninePm = $('#color-9pm');
var tenPm = $('#color-10pm');
var elevenPm = $('#color-11pm');

var nineamText = localStorage.getItem('9-am');
var tenamText = localStorage.getItem('10-am');
var elevenamText = localStorage.getItem('11-am');

nineAm.val(localStorage.getItem('9-am'));
tenAm.val(localStorage.getItem('10-am'));
elevenAm.val(localStorage.getItem('11-am'));
twelvePM.val(localStorage.getItem('12-pm'));
onePm.val(localStorage.getItem('1-pm'));
twoPm.val(localStorage.getItem('2-pm'));
threePm.val(localStorage.getItem('3-pm'));
fourPm.val(localStorage.getItem('4-pm'));
fivePm.val(localStorage.getItem('5-pm'));
sixPm.val(localStorage.getItem('6-pm'));
sevenPm.val(localStorage.getItem('7-pm'));
eightPm.val(localStorage.getItem('8-pm'));
ninePm.val(localStorage.getItem('9-pm'));
tenPm.val(localStorage.getItem('10-pm'));
elevenPm.val(localStorage.getItem('11-pm'));




function saveBtn() {
    var inputText = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    localStorage.setItem(hour, inputText);
    console.log(hour);
    console.log(inputText);
}

savedButton.on('click', saveBtn);

const hourToDivMap = {
    '9': nineAm,
    '10': tenAm,
    '11': elevenAm,
    '12': twelvePM,
    '13': onePm,
    '14': twoPm,
    '15': threePm,
    '16': fourPm,
    '17': fivePm,
    '18': sixPm,
    '19': sevenPm,
    '20': eightPm,
    '21': ninePm,
    '22': tenPm,
    '23': elevenPm,
}

function displayColor() {
    const hours = Object.keys(hourToDivMap);
    const hoursInThePast = hours.filter((hour) => parseInt(hour) < currentHour)
    const hoursInTheFuture = hours.filter((hour) => parseInt(hour) > currentHour)
    
    const presentElement = hourToDivMap[currentHour]
    presentElement.addClass('present')

    hoursInThePast.forEach((hour) => {
        const pastElementToChange = hourToDivMap[hour]
        pastElementToChange.addClass('past');
    });
    
    hoursInTheFuture.forEach(hour => {
        const futureElementChange = hourToDivMap[hour]
        futureElementChange.addClass('future')
    })
}

displayColor();