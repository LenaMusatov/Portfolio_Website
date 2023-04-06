// -----------------------Home------------------------

//Inspiratie uit tutorial https://youtu.be/nxoHR9lltK0

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "a Graphic Designer";

    }, 0);

    setTimeout(() =>{
        text.textContent = "an Illustrator";

    }, 4000);

    setTimeout(() =>{
        text.textContent = "a Web Designer";

    }, 8000);

    setTimeout(() =>{
        text.textContent = "a UX/UI Designer";
    }, 12000);

    setTimeout(() =>{
        text.textContent = "a Front-end developer";
    }, 16000);

    setTimeout(() =>{
        text.textContent = "an Animator";
    }, 20000);
}

textLoad();
setInterval(textLoad,24000);

// -----------------------About------------------------







