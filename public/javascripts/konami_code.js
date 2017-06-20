const alphabet = [65, 66, 67]

// keep track of index outside of the event handler
var index = 0

document.addEventListener("keydown", onKeyDownHandler);

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
	
	console.log(key)

  if (key === alphabet[index]) {
    index++

    if (index === alphabet.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}