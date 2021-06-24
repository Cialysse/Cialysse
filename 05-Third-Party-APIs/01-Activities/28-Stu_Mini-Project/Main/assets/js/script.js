//creating the timer
function update() {
    $('#time-display').html(moment().format('D.MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);