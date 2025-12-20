// AFFILIATE LINK
const AFFILIATE_URL =
  "https://uh8f8d208auh.uewhbgfvds.cc/?rid=-7EBNQCgQAAHCsWwYABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

// CTA redirect
function goToAffiliate() {
  window.location.href = AFFILIATE_URL;
}

// COUNTDOWN
let time = 15 * 60; // 15 minutes
const timerEl = document.getElementById("timer");

setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerEl.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (time > 0) time--;
}, 1000);
