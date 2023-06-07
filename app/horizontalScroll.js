let containerMain = document.querySelector('.mainContainer')

containerMain.addEventListener("wheel", (event) => {
    event.preventDefault();
    let [x, y] = [event.deltaX, event.deltaY];
    let magnitude;

    if (x === -0) {
    magnitude = y > 0 ? -100 : 100;
    } else {
    magnitude = x;
    }

    window.scrollBy(
     y,x
    );
});

