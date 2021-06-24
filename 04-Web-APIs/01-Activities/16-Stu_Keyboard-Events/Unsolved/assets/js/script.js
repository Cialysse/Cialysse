function keydownAction(event) {
  // TODO: Complete keydown function
  // the value of the key pressed
  // console.log(event);
  //  var keyCode = event.code;
  // TODO - manipulate the DOM to show those values
  // document.querySelector(#"key").textContent = keyPress;
  // document.querySelector("#code").textContent = keyCode;
  // document.querySelector("#staus").innerHTML = "KEYDOWN Event"
  document.querySelector("#status").inerrHTML = "KEYDOWN Event";
  document.querySelector("#key")

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
textAreaEl.addEventListener('keydown', keydownAction);

