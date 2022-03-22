import wordlist from "../wordlist";

function generateTest(testSize) {
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    let wpmTest = [];
    //temporarily using 0-8 until wordlist.js is complete
    for (let i = 0; i<(testSize-1); i++) {
        wpmTest[i] = wordlist[randomNumber(0, 8)];
    }
    return wpmTest;
}

export default generateTest;