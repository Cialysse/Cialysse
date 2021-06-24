// <div class="box" data-number="1" data-state+"hidden"></div>

var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  var state = element.getAttribute("data-state");

  if(element.matches(".box")) {
    var state = element.getAttribute("data-state");

    // Render the card conditionally
    if(state === "hidden") {
      element.textContent = element.dataset.number;

      element.dataset.state = "visible"
    }

    else{
      element.textContent = ""; 
      element.setAttribute("data-state", "hidden")
    }
  }

  // TODO: Complete function
});
