window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

function openLetter() {
    const letter = document.querySelector(".letter");
    const letterSection = document.getElementById("letterSection");
    const music = document.getElementById("birthdayMusic");

    // Open the envelope
    letter.classList.add("open");

    // Try to start the music
    if (music) {
        music.play().catch(() => {
            console.log("Music needs user interaction to play.");
        });
    }

    // Reveal the letter after the envelope opens
    setTimeout(() => {

        letterSection.classList.add("show");

        // Scroll down to the letter
        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);
}

const memories = [
    {
        title: "A Little Moment",
        text: "I think about you whenever i hear this song because(you may not remember) one time last year we were talking and you were like when we're both rich we'll drive in our expensive cars and sing along to this song....it was our song!(not the exact words but something like that)..... Speaking of songs....there's a playlist with some songs that remind me of you at the end of the page.....i've done too much ba?😭",
        type: "image",
        media: "media/memory 1.jpeg"
    },
    {
        title: "That Moment",
        text: "I think about you anytime i make weird videos and don't want to keep them to myself .....you've seen me in every possible state and still love and respect me no less....Thank you ❤️.",
        type: "video",
        media: "media/memory 2.mp4"
    },
    {
        title: "Another Memory",
        text: "I think about you everytime i'm sad because i know you'll always be there to cheer me up.....you're just one of a kind.",
        type: "video",
        media: "media/memory 3.mp4"
    },
    {
        title: "One Of Those Days",
        text: "I think about you whenever i'm having fun because there's noone i'd rather have the best times of my life with asides(yet).",
        type: "video",
        media: "media/memory 4.mp4"
    },
    {
        title: "One To Keep",
        text: "I think about you whenever i see quotes like this because you always listen to whatever rubbish i have to say without complaining.",
        type: "image",
        media: "media/memory5.jpeg"
    }
];

function showMemory(index) {
    const memory = memories[index];

    document.getElementById("popupTitle").textContent = memory.title;
    document.getElementById("popupText").textContent = memory.text;

    document.getElementById("popupNumber").textContent =
        "MEMORY " + String(index + 1).padStart(2, "0");

    const popupPhoto = document.getElementById("popupPhoto");

    if (memory.type === "image") {
        popupPhoto.innerHTML = `
    <image src="${memory.media}" controls autoplay muted playsinline loop></video>
    `;
    } else {
        popupPhoto.innerHTML = `
            <video src="${memory.media}" controls autoplay muted loop></video>
        `;
    }

    document.getElementById("memoryPopup").classList.add("show");
}

function closeMemory() {
    document.getElementById("memoryPopup").classList.remove("show");
}
