// AFFILIATE LINK
const AFFILIATE_URL =
  "https://mnbxs220ervljq8-mx4-berzeo.health-line.me/azVAaudELz/MNBXs220eRVLJQ8/?al=105073&ap=-1&esub=-7EBRQCgQAAAfGpAQDX5sDma83cZoB-wcAAw_-90ZpEQ0aEQ0aEQ1CEQ1aA0JSA3Vzf2FkY29tYm__dUFzUldHYjkAA2VX&site_option=0&target=-7EBNQCgQAAAfGpAQDX5sABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

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
