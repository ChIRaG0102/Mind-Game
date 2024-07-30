// GANPATI BAPPA MORYA 

let moveCircle = document.querySelector("#movesCounter");
let pairCircle = document.querySelector("#pairsCounter");
let movesCounter = 0;
let pairsCounter = 0;
let clutter = " ";
let loss = document.querySelector(".loss");
let win = document.querySelector(".win");
let intervalId;
let flipCards = new Audio("./audio/flipcard-91468.mp3");
let cardSound = new Audio("./audio/card-sounds-35956.mp3");
let success = new Audio("./audio/success.mp3");
let winSound = new Audio("./audio/win.mp3");
let lossSound = new Audio("./audio/loss.mp3");




// ARRAY SECTIONS 
const car = [
    {
        id: 12,
        img: "img/maclaren12.webp"
    },
    {
        id: 3,
        img: "img/lambo3.jpeg"
    },
    {
        id: 1,
        img: "img/mustang1.webp"
    },
    {
        id: 6,
        img: "img/rolls6.webp"
    },
    {
        id: 2,
        img: "img/ferrari2.jpeg"
    },
    {
        id: 7,
        img: "img/pagani7.webp"
    },
    {
        id: 3,
        img: "img/lambo3.jpeg"
    },
    {
        id: 9,
        img: "img/devel9.jpeg"
    },
    {
        id: 4,
        img: "img/bently4.jpeg"
    },
    {
        id: 10,
        img: "img/porsche10.webp"
    },
    {
        id: 5,
        img: "img/astonMartin5.webp"
    },
    {
        id: 6,
        img: "img/rolls6.webp"
    },
    {
        id: 11,
        img: "img/audi11.webp"
    },
    {
        id: 7,
        img: "img/pagani7.webp"
    },
    {
        id: 8,
        img: "img/supra8.webp"
    },
    {
        id: 9,
        img: "img/devel9.jpeg"
    },
    {
        id: 4,
        img: "img/bently4.jpeg"
    },
    {
        id: 10,
        img: "img/porsche10.webp"
    },
    {
        id: 1,
        img: "img/mustang1.webp"
    },
    {
        id: 11,
        img: "img/audi11.webp"
    },
    {
        id: 5,
        img: "img/astonMartin5.webp"
    },
    {
        id: 12,
        img: "img/maclaren12.webp"
    },
    {
        id: 8,
        img: "img/supra8.webp"
    },
    {
        id: 2,
        img: "img/ferrari2.jpeg"
    }
];

// CRICKETERS ARRAY

const cricket = [
    {
        id: 3,
        img: "img/raina3.jpeg"
    },
    {
        id: 12,
        img: "img/boom12.jpeg"
    },
    {
        id: 1,
        img: "img/kholi1.jpeg"
    },
    {
        id: 6,
        img: "img/pant6.jpeg"
    },
    {
        id: 2,
        img: "img/jadeja2.jpeg"
    },
    {
        id: 7,
        img: "img/dhoni7.jpeg"
    },
    {
        id: 3,
        img: "img/raina3.jpeg"
    },
    {
        id: 9,
        img: "img/rohit9.jpeg"
    },
    {
        id: 4,
        img: "img/rutu4.jpeg"
    },
    {
        id: 10,
        img: "img/iyer10.jpeg"
    },
    {
        id: 5,
        img: "img/kl5.jpeg"
    },
    {
        id: 6,
        img: "img/pant6.jpeg"
    },
    {
        id: 11,
        img: "img/rahane11.jpeg"
    },
    {
        id: 7,
        img: "img/dhoni7.jpeg"
    },
    {
        id: 8,
        img: "img/pandya8.jpeg"
    },
    {
        id: 9,
        img: "img/rohit9.jpeg"
    },
    {
        id: 4,
        img: "img/rutu4.jpeg"
    },
    {
        id: 10,
        img: "img/iyer10.jpeg"
    },
    {
        id: 1,
        img: "img/kholi1.jpeg"
    },
    {
        id: 11,
        img: "img/rahane11.jpeg"
    },
    {
        id: 5,
        img: "img/kl5.jpeg"
    },
    {
        id: 12,
        img: "img/boom12.jpeg"
    },
    {
        id: 8,
        img: "img/pandya8.jpeg"
    },
    {
        id: 2,
        img: "img/jadeja2.jpeg"
    },
];

// GAMES ARRAY 

const game = [
    {
        id: 3,
        img: "img/pubg3.jpeg"
    },
    {
        id: 12,
        img: "img/legeneds12.jpeg"
    },
    {
        id: 1,
        img: "img/among1.png"
    },
    {
        id: 6,
        img: "img/minecraft6.jpeg"
    },
    {
        id: 2,
        img: "img/gta2.jpeg"
    },
    {
        id: 7,
        img: "img/cs7.jpeg"
    },
    {
        id: 3,
        img: "img/pubg3.jpeg"
    },
    {
        id: 9,
        img: "img/pokemon9.jpeg"
    },
    {
        id: 4,
        img: "img/cod4.jpeg"
    },
    {
        id: 10,
        img: "img/fortnite10.jpeg"
    },
    {
        id: 5,
        img: "img/fifa5.jpeg"
    },
    {
        id: 6,
        img: "img/minecraft6.jpeg"
    },
    {
        id: 11,
        img: "img/cricket11"
    },
    {
        id: 7,
        img: "img/cs7.jpeg"
    },
    {
        id: 8,
        img: "img/nfs8.jpeg"
    },
    {
        id: 9,
        img: "img/pokemon9.jpeg"
    },
    {
        id: 4,
        img: "img/cod4.jpeg"
    },
    {
        id: 10,
        img: "img/fortnite10.jpeg"
    },
    {
        id: 1,
        img: "img/among1.png"
    },
    {
        id: 11,
        img: "img/cricket11"
    },
    {
        id: 5,
        img: "img/fifa5.jpeg"
    },
    {
        id: 12,
        img: "img/legeneds12.jpeg"
    },
    {
        id: 8,
        img: "img/nfs8.jpeg"
    },
    {
        id: 2,
        img: "img/gta2.jpeg"
    }
];

// ANIMALS ARRAY

const animal = [
    {
        id: 3,
        img: "img/bjaguar3.jpeg"
    },
    {
        id: 12,
        img: "img/elephant12.jpeg"
    },
    {
        id: 1,
        img: "img/tiger1.jpeg"
    },
    {
        id: 6,
        img: "img/rabbit6.jpeg"
    },
    {
        id: 2,
        img: "img/panda2.jpeg"
    },
    {
        id: 7,
        img: "img/lion7.jpeg"
    },
    {
        id: 3,
        img: "img/bjaguar3.jpeg"
    },
    {
        id: 9,
        img: "img/bear9.jpeg"
    },
    {
        id: 4,
        img: "img/jaguar4.jpeg"
    },
    {
        id: 10,
        img: "img/jiraf10.jpeg"
    },
    {
        id: 5,
        img: "img/fox5.jpeg"
    },
    {
        id: 6,
        img: "img/rabbit6.jpeg"
    },
    {
        id: 11,
        img: "img/zebra11.jpeg"
    },
    {
        id: 7,
        img: "img/lion7.jpeg"
    },
    {
        id: 8,
        img: "img/dear8.jpeg"
    },
    {
        id: 9,
        img: "img/bear9.jpeg"
    },
    {
        id: 4,
        img: "img/jaguar4.jpeg"
    },
    {
        id: 10,
        img: "img/jiraf10.jpeg"
    },
    {
        id: 1,
        img: "img/tiger1.jpeg"
    },
    {
        id: 11,
        img: "img/zebra11.jpeg"
    },
    {
        id: 5,
        img: "img/fox5.jpeg"
    },
    {
        id: 12,
        img: "img/elephant12.jpeg"
    },
    {
        id: 8,
        img: "img/dear8.jpeg"
    },
    {
        id: 2,
        img: "img/panda2.jpeg"
    }
];


let section = document.querySelector("#section");
const makeCards = (arr) => {
    clutter = "";
    arr.forEach(elem => {
        clutter += `<div class="card">
                    <div class="front">
                        <img src="${elem.img}" style="transform: rotateY(180deg);" alt="">
                    </div>
                    <div class="back">
                    </div>
                </div>`;
    });
    section.innerHTML = clutter;
    moveCards();
}


const moveCards = () => {
    const cards = document.querySelectorAll(".card");
    let rotatedCards = [];
    let rotated = [];

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            gsap.to(card, {
                rotateY: -180,
                duration: 1,
                stagger: 0.77
            });

            flipCards.play();
            // let text = event.target.innerText;

            let imgElement = event.target.previousElementSibling.querySelector("img");
            let imgSrc = imgElement.src;
            let imgName = imgSrc.split("/").pop();
            // console.log(imgName);   
            movesCounter += 1;
            moveCircle.innerHTML = movesCounter

            if (rotated.length < 2) {
                rotatedCards.push(card);
                rotated.push(imgName);
                // rotated.push(Text)
            }

            if (rotated.length === 2) {
                if (rotated[0] !== rotated[1]) {
                    // console.log("not equal");
                    setTimeout(() => {
                        // console.log("delayed 1 sec");
                        rotatedCards.forEach(turnedCard => {
                            gsap.to(turnedCard, {
                                rotateY: 0,
                                duration: 1,
                                stagger: 0.77
                            });
                        });
                        cardSound.play();
                        rotated = [];
                        rotatedCards = [];
                    }, 890);
                } else {
                    rotated = [];
                    rotatedCards = [];
                    pairsCounter += 1;
                    pairCircle.innerHTML = pairsCounter;
                    success.play();
                    if (pairCircle.innerHTML === "12") {
                        // console.log("win"); 
                        win.style.display = "block";
                        winSound.play();
                        clearInterval(intervalId);
                        closeWrapper();
                        min.innerHTML = 1;
                        sec.innerHTML = 60;
                        startBtn.disabled = false;
                    }
                }
            }
        });
    });
}

moveCards();


let tl = gsap.timeline();

tl.from("h1", {
    y: 120,
    duration: 0.7,
    delay: 0.7,
    stagger: 0.1,
    ease: "slow(0.7,0.7,false)"
});



let boxes = document.querySelectorAll(".box");

const cardUp = () => {
    boxes.forEach(box => {
        box.addEventListener("mouseenter", (elem) => {
            // console.log(elem.target.children[0]);
            let img = elem.target.children[0];
            // console.log(img);
            gsap.to(img, {
                y: -50,
                duration: 0.5,
                delay: 0.2,
                ease: "slow(0.7,0.7,false)"
                // stagger:0.7
            })
        });
    });
}

cardUp();

const cardDown = () => {
    boxes.forEach(box => {
        box.addEventListener("mouseleave", (elem) => {
            // console.log(elem.toElement);
            let img = elem.target.children[0];
            gsap.to(img, {
                y: 0,
                duration: 0.5,
                delay: 0.2,
                ease: "slow(0.7,0.7,false)"
                // stagger:0.7
            })
        })
    });
}

cardDown();


let cardChoice = document.querySelector(".second h2");
boxes.forEach(box => {
    box.addEventListener("click", (elem) => {
        let names = elem.target.parentElement.querySelector("h2").innerText;
        // console.log(names);
        cardChoice.innerHTML = names;
    });
});


let redCard = document.querySelector(".red");
let greenCard = document.querySelector(".green");
let blueCard = document.querySelector(".blue");
let yellowCard = document.querySelector(".yellow");

const upColorCards = (cardBox) => {
    gsap.to(cardBox, {
        y: -30,
        rotate: -10,
        duration: 0.3,
        delay: 0.3
    });
}

const downColorCards = (cardBox) => {
    gsap.to(cardBox, {
        y: 0,
        rotate: 0,
        duration: 0.3,
        delay: 0.3
    });
}

redCard.addEventListener("mouseenter", () => {
    upColorCards(redCard);
});

redCard.addEventListener("mouseleave", () => {
    downColorCards(redCard)
});

blueCard.addEventListener("mouseenter", () => {
    upColorCards(blueCard);
});

blueCard.addEventListener("mouseleave", () => {
    downColorCards(blueCard)
});

greenCard.addEventListener("mouseenter", () => {
    upColorCards(greenCard);
});

greenCard.addEventListener("mouseleave", () => {
    downColorCards(greenCard)
});

yellowCard.addEventListener("mouseenter", () => {
    upColorCards(yellowCard);
});

yellowCard.addEventListener("mouseleave", () => {
    downColorCards(yellowCard)
});


let page1 = document.querySelector(".page1");
let timer = document.querySelector(".timer");
let moves = document.querySelector(".moves");
let pair = document.querySelector(".pair");
let startBtn = document.querySelector(".start");   //---------- START BUTTON -----------------

redCard.addEventListener("click", () => {
    page1.style.backgroundColor = "red";
    timer.style.backgroundColor = "red";
    moves.style.backgroundColor = "red";
    pair.style.backgroundColor = "red";
    startBtn.style.backgroundColor = "red";
});

greenCard.addEventListener("click", () => {
    page1.style.backgroundColor = "#D8E9A8";
    timer.style.backgroundColor = "#D8E9A8";
    moves.style.backgroundColor = "#D8E9A8";
    pair.style.backgroundColor = "#D8E9A8";
    startBtn.style.backgroundColor = "#D8E9A8";
});

blueCard.addEventListener("click", () => {
    page1.style.backgroundColor = "blue";
    timer.style.backgroundColor = "blue";
    moves.style.backgroundColor = "blue";
    pair.style.backgroundColor = "blue";
    startBtn.style.backgroundColor = "blue";
});

yellowCard.addEventListener("click", () => {
    page1.style.backgroundColor = "#FFAA00";
    timer.style.backgroundColor = "#FFAA00";
    moves.style.backgroundColor = "#FFAA00";
    pair.style.backgroundColor = "#FFAA00";
    startBtn.style.backgroundColor = "#FFAA00";
});


gsap.to(".third button", {
    scale: 1.1,
    duration: 0.3,
    delay: 0.3,
    repeat: Infinity,
    repeatDelay: 0.3,
    yoyo: true,
});


let wrapper = document.querySelector(".wrapper");
const openWrapper = () => {
    gsap.to(".wrapper", {
        display: "block",
        delay: 0.5,
        duration: 0.5
    });
}

const closeWrapper = () => {
    gsap.to(".wrapper", {
        display: "none",
        delay: 0.1,
        duration: 0.1
    });
}


const startGame = () => {
    let cardChoiceName = document.querySelector(".second h2").innerText;
    // console.log(cardChoiceName);

    if (cardChoiceName === "Cricket") {
        makeCards(cricket);
    }
    if (cardChoiceName === "Cars") {
        makeCards(car);
    }
    if (cardChoiceName === "Games") {
        makeCards(game);
    }
    if (cardChoiceName === "Animals") {
        makeCards(animal);
    }
}


startBtn.addEventListener("click", () => {
    openWrapper();
    startGame();
    startBtn.disabled = true;
    clock();
    loss.style.display = "none"
    win.style.display = "none"
    pairCircle.innerHTML = "00"
    moveCircle.innerHTML = "00"
    pairsCounter = 0;
    movesCounter = 0;
});


const clock = () => {
    let min = document.querySelector("#min");
    let minute = parseInt(min.innerHTML);
    let sec = document.querySelector("#sec");
    let second = parseInt(sec.innerHTML);
    intervalId = setInterval(() => {
        if (second > 0) {
            second--;
            sec.innerText = second;
            if (minute > 0 && second == 0) {
                minute -= 1;
                second = 60;
                sec.innerText = second;
                min.innerText = minute;
            }
        } else {
            clearInterval(intervalId);
            closeWrapper();
            min.innerHTML = 1;
            sec.innerHTML = 60;
            moveCircle.innerHTML = "00";
            pairCircle.innerHTML = "00";
            loss.style.display = "block"
            lossSound.play();
            startBtn.disabled = false;
        }     
    }, 1000);
}


