gsap.to("h1", {
    text: "Ogandis Safari Park",
    duration: 2.5,
    ease: "power1.in"
})
gsap.from("h4", {delay:1.8, duration: 2.5, scale: 1, ease: "power2.inOut", opacity: 0})
gsap.from("h2", {delay:2.5, duration: 2.5, scale: 1, ease: "power2.inOut", opacity: 0})
gsap.from(".safari", {delay:2.5, duration: 4, y: 50, ease: "elastic.inOut", opacity: 0})
gsap.fromTo("#myButton", {opacity: 1, scale: 0.9, ease: "power1.in"}, { duration: 3, opacity: 1, scale: 1.1, ease: "power1.in", repeat:100})

function ogandisCountdown() {
    const ogandisDate = new Date ("May 26, 2024 00:00");
    const now = new Date();
    const diff = ogandisDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        weAreOpen();
    }
}

let timerID = setInterval(ogandisCountdown, 1000);

function weAreOpen() {
    const heading = document.querySelector('h2');
    heading.textContent = 'WE ARE FINALLY OPEN!';
    heading.classList.add('open');
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');
button.addEventListener('click', function() {
    if(audio.paused) {
        audio.play();
    }
    
    else {
        audio.pause();
    }
})
