const imgArr = [
  "https://i.pinimg.com/originals/8b/52/0a/8b520a45c87da5509c96e9d2e2eafe4a.gif",
  "https://i.pinimg.com/originals/7f/71/93/7f7193131963d7913e4eff9ad2700c7f.gif",
  "https://i.pinimg.com/originals/17/37/9a/17379a1e4776610710e0dab4ebc8921a.gif",
  "https://i.pinimg.com/originals/64/f9/42/64f9429ef6930315ea766b34911680da.gif",
  "https://i.pinimg.com/originals/80/ee/ef/80eeefc3a2674841a373868d716d4066.gif",
  "https://i.pinimg.com/originals/c6/41/ba/c641babc376ffe10f65ee472a646c6e1.gif",
  "https://i.pinimg.com/originals/aa/ce/ff/aaceff85fd27fcf0923248c8cd962417.gif",
  "https://gifdb.com/images/high/angry-bear-couple-kick-fight-684d3r0pyuyxtio9.gif",
];

const yesAction =
  "https://gifdb.com/images/high/milk-bear-love-mocha-give-many-kisses-qih530nkafsgknpb.gif";

const questionsArr = [
  "Am I cute, or do you need another glance?",
  "Rate my cuteness?",
  "They say I'm a snowflake, cute enough to catch your eye.",
  "Cuteness check: yay or nay?",
  "Seriously, am I cute or more like a 'meh'?",
  "Cute or not.",
  "Am I cute?",
];

let btnYes = document.querySelector("#btnYes");
let btnNo = document.querySelector("#btnNo");
let Gifs = document.querySelector("#Gifs");

btnNo.addEventListener("click", () => {
  // change random image
  let randomImage = Math.floor(Math.random() * imgArr.length);
  Gifs.src = imgArr[randomImage];

  // change random text
  let randomText = Math.floor(Math.random() * questionsArr.length);
  btnNo.innerHTML = questionsArr[randomText];

  // change size
  let getHeight = btnYes.offsetHeight + 10;
  let getWidth = btnYes.offsetWidth + 10;
  btnYes.style.height = getHeight + "px";
  btnYes.style.width = getWidth + "px";
});

btnYes.addEventListener("click", () => {
  // reset
  alert("yes i know im cute thank you");
  Gifs.src = yesAction;
  btnNo.innerHTML = "No";
});
