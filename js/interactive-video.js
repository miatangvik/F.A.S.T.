var bgVideo = document.getElementById("bgvid");
var overlay = document.getElementById("overlay");
var playAgain = document.getElementById("play-again");

var title = document.getElementById("title");
var fastInfo = document.getElementById("fast-info");
var iMessage = document.getElementById("imessage");

var questions = document.getElementsByClassName("question");
var alternatives1 = document.getElementsByClassName("alternativeQ1");
var alternatives2 = document.getElementsByClassName("alternativeQ2");
var alternatives3 = document.getElementsByClassName("alternativeQ3");
var letterMeanings = document.getElementsByClassName("letter-meaning");
var continueBtns = document.getElementsByClassName("continue");
var blackBgInfo = document.getElementsByClassName("black-bg");

var correctSound = new Audio('audio/correct.mp3');
correctSound.volume = 0.2;

var isPaused = false;

setInterval(makeInteractive, 200);

// Pause video by pressing space
document.addEventListener("keypress", function (event) {
    if (overlay.classList.contains("hidden")) {
        if (event.keyCode == 32) {
            if (!isPaused) {
                bgVideo.pause();
                isPaused = true;
            } else {
                bgVideo.play();
                isPaused = false;
            }
        }
    }
});

// Pause video on click
bgVideo.addEventListener("click", function () {
    if (!isPaused) {
        bgVideo.pause();
        isPaused = true;
    } else {
        bgVideo.play();
        isPaused = false;
    }
});

playAgain.addEventListener("click", function () {
    bgVideo.currentTime = 0;
    overlay.classList.add("hidden");
    blackBgInfo[4].classList.add("hidden");
});

function makeInteractive() {
    // Show title
    if (bgVideo.currentTime >= 1 && bgVideo.currentTime < 3.5) {
        title.classList.remove("hidden");
    } else {
        title.classList.add("hidden");
    }

    // Show info about the F.A.S.T.-rule
    if (bgVideo.currentTime >= 4.5 && bgVideo.currentTime < 7.8) {
        fastInfo.classList.remove("hidden");
    } else {
        fastInfo.classList.add("hidden");
    }

    // Show iMessage
    if (bgVideo.currentTime >= 19.3 && bgVideo.currentTime < 21.4) {
        iMessage.classList.remove("hidden");
    } else {
        iMessage.classList.add("hidden");
    }

    // Display first question
    if (bgVideo.currentTime >= 21 && bgVideo.currentTime < 21.4) {
        displayQuestion(0);

        // Hide question on answer
        for (var i = 0; i < alternatives1.length; i++) {
            alternatives1[i].addEventListener("click", function () {
                checkAnswer(this);

                // Display answer of first question
                bgVideo.currentTime = 21.4;
                questions[0].classList.add("hidden");
                letterMeanings[0].classList.remove("hidden");

                for (var i = 0; i < continueBtns.length; i++) {
                    continueBtns[i].addEventListener("click", function () {
                        bgVideo.play();
                        letterMeanings[0].classList.add("hidden");
                        overlay.classList.add("hidden");
                    });
                }
            });
        }
    }

    // Display second question
    if (bgVideo.currentTime >= 35.6 && bgVideo.currentTime < 36) {
        displayQuestion(1);

        // Hide question on answer
        for (var i = 0; i < alternatives2.length; i++) {
            alternatives2[i].addEventListener("click", function () {
                checkAnswer(this);

                // Display answer of second question
                bgVideo.currentTime = 36;
                questions[1].classList.add("hidden");
                letterMeanings[1].classList.remove("hidden");

                for (var i = 0; i < continueBtns.length; i++) {
                    continueBtns[i].addEventListener("click", function () {
                        bgVideo.play();
                        letterMeanings[1].classList.add("hidden");
                        overlay.classList.add("hidden");
                    });
                }
            });
        }
    }

    // Display third question
    if (bgVideo.currentTime >= 43.5 && bgVideo.currentTime < 43.8) {
        displayQuestion(2);

        // Hide question on answer
        for (var i = 0; i < alternatives3.length; i++) {
            alternatives3[i].addEventListener("click", function () {
                checkAnswer(this);

                // Display answer of third question
                bgVideo.currentTime = 43.8;
                questions[2].classList.add("hidden");
                letterMeanings[2].classList.remove("hidden");

                for (var i = 0; i < continueBtns.length; i++) {
                    continueBtns[i].addEventListener("click", function () {
                        bgVideo.play();
                        letterMeanings[2].classList.add("hidden");
                        overlay.classList.add("hidden");
                    });
                }
            });
        }
    }

    if (bgVideo.currentTime >= 84 && bgVideo.currentTime < 90) {
        blackBgInfo[0].classList.remove("hidden");
    } else {
        blackBgInfo[0].classList.add("hidden");
    }

    if (bgVideo.currentTime >= 92 && bgVideo.currentTime < 97) {
        blackBgInfo[1].classList.remove("hidden");
    } else {
        blackBgInfo[1].classList.add("hidden");
    }

    if (bgVideo.currentTime >= 99 && bgVideo.currentTime < 103) {
        blackBgInfo[2].classList.remove("hidden");
    } else {
        blackBgInfo[2].classList.add("hidden");
    }

    if (bgVideo.currentTime >= 105 && bgVideo.currentTime < 110) {
        blackBgInfo[3].classList.remove("hidden");
    } else {
        blackBgInfo[3].classList.add("hidden");
    }

    if (bgVideo.currentTime >= 112) {
        blackBgInfo[4].classList.remove("hidden");
    }
}

function displayQuestion(num) {
    bgVideo.pause();
    overlay.classList.remove("hidden");
    questions[num].classList.remove("hidden");
}

function checkAnswer(ans) {
    if (ans.classList.contains("correct")) {
        correctSound.play();
    }
}
