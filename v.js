/* =====================================================
   GET SCREENS
===================================================== */

const startScreen =
    document.getElementById("startScreen");

const calendarScreen =
    document.getElementById("calendarScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const letterScreen =
    document.getElementById("letterScreen");

const finalScreen =
    document.getElementById("finalScreen");


/* =====================================================
   SCREEN SWITCHING
===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(function(item) {

            item.classList.remove("active");

        });

    screen.classList.add("active");
}


/* =====================================================
   START BUTTON
===================================================== */

const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

startButton.addEventListener("click", function () {

    bgMusic.volume = 0.5;

    // Start playing first because this click is a user action
    bgMusic.play();

    // Once the browser starts the audio, jump to 27 seconds
    bgMusic.addEventListener("playing", function () {
        bgMusic.currentTime = 27;
        console.log("🎵 NOW PLAYING FROM 27 SECONDS");
    }, { once: true });

    musicButton.textContent = "🔊";

    showScreen(calendarScreen);
});

musicButton.addEventListener("click", function () {

    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicButton.textContent = "🔇";
    }

});

/* =====================================================
   SPECIAL DATE — 17
===================================================== */

const specialDate =
    document.getElementById("specialDate");


specialDate.addEventListener("click", function() {

    /* Make 17 react */

    specialDate.style.transform =
        "scale(1.5)";

    specialDate.style.boxShadow =
        "0 0 40px #ff4f9a, 0 0 100px #ff1f7a";


    /* Speed up balloons */

    document
        .querySelectorAll(".balloon")
        .forEach(function(balloon) {

            balloon.style.animationDuration =
                "4s";

        });


    /* Wait for little magical effect */

    setTimeout(function() {

        showScreen(birthdayScreen);

    }, 800);

});


/* =====================================================
   OPEN LETTER
===================================================== */

const letterButton =
    document.getElementById("letterButton");

// =====================================
// LETTER SCREEN
// =====================================

const letterScreen =
    document.getElementById("letterScreen");

const envelope =
    document.getElementById("envelope");

const openText =
    document.getElementById("openText");

const messageBox =
    document.getElementById("messageBox");

const typedMessage =
    document.getElementById("typedMessage");

const signature =
    document.getElementById("signature");

const finalButton =
    document.getElementById("finalButton");


letterButton.addEventListener("click", function () {

    birthdayScreen.style.display = "none";

    letterScreen.style.display = "flex";

});

// =====================================
// OPEN ENVELOPE
// =====================================

envelope.addEventListener("click", function () {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    openText.style.opacity = "0";

    setTimeout(function () {

        messageBox.style.display = "block";

        typeLetter();

    }, 1000);

});
// =====================================
// TYPING EFFECT
// =====================================

function typeLetter() {

    const message = `Hey you... ❤️

I don't know if I can put everything I feel into words,
but I really wanted to make this little surprise for you.

You are one of those people who makes ordinary days
feel a little more special.

Thank you for all the laughs,
the memories,
the random conversations,
and simply for being you.

I hope this birthday brings you
all the happiness you deserve.

And no matter how many birthdays come,
I hope we keep making beautiful memories together. ❤️`;

    let index = 0;

    typedMessage.textContent = "";

    function type() {

        if (index < message.length) {

            typedMessage.textContent +=
                message.charAt(index);

            index++;

            setTimeout(type, 28);

        } else {

            signature.style.display = "block";

            setTimeout(function () {

                finalButton.style.display = "block";

            }, 700);
        }
    }

    type();
}

/* =====================================================
   FINAL BUTTON
===================================================== */

const finalButton =
    document.getElementById("finalButton");


finalButton.addEventListener("click", function() {

    showScreen(finalScreen);

});