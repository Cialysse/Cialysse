var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here\
$(function () {
  var skillNames = [
    'Bootstrap',
    'Python',
    'Javascript',
    'Git',
    'CSS',
    'HTML',
    'React',
    'JSON',
    'JQuery',
    'Ruby'

)]


$('skill-name').autocomplete({
  source: skillNames
  });
}
// Add Datepicker widget here
//
