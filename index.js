// Your code here
const dodger = document.getElementById("dodger")
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
        const right = parseInt(rightNumbers, 10);
    
        if (right > 0) {
          dodger.style.left = `${right + 10}px`;
        }
    }

function moveDodgerUp() {
    const upNumbers = dodger.style.left.replace("px", "");
    const up = parseInt(upNumbers, 10);

    if (up > 0) {
      dodger.style.left = `${up - 10}px`;
    }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function (e) {
 if (e.key === "ArrowRight") {
    moveDodgerRight();
 }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
});