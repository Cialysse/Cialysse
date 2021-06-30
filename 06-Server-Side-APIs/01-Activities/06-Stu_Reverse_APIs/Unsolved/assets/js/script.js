var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
//the first requirement is the url of the call itself, followed by the method
//JQUery .ajax method
//printing out response
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
//fetch only requires the URL itself, all other functionality such as what is passed is handled by that specific API
//fetch with a url parameter
fetch(requestUrl)
//
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();//declare new object of type XMLHhttprequest
xhr.onreadystatechange = function () {//in that new object, call the onreadychange method and set it to a function
  if (xhr.readyState === XMLHttpRequest.DONE) {//check
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);// this is where you specify the api url and the retrieval method 
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
