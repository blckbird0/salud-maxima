// AFFILIATE LINK
const affiliateLink =
  "https://uh8f8d208auh.axdsz.pro/?rid=-7EBNQCgQAAHCwWwYABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

// CTA
function goToAffiliate() {
  window.location.href = affiliateLink;
}

// COOKIE
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  goToAffiliate();
}

window.addEventListener("load", () => {
  if (localStorage.getItem("cookiesAccepted")) {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "none";
  }
});

// COUNTDOWN
let time = 15 * 60;
const timerEl = document.getElementById("timer");

setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerEl.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (time > 0) time--;
}, 1000);
