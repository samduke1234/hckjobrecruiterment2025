const candidates = {
  "KCM1984GRD013132": "KCM1984GRD013132.html",
  "KCM1984GRD012743": "KCM1984GRD012743.html",
  "KCM1984GRD011407": "KCM1984GRD011407.html",
  "KCM1984GRD013566": "KCM1984GRD013566.html",
  "KCM1984GRD012920": "KCM1984GRD012920.html",
  "KCM1984GRD012951": "KCM1984GRD012951.html",
  "KCM1984GRD011681": "KCM1984GRD011681.html"
};

function searchCandidate() {
  const input = document.getElementById("appNo").value.trim();
  const msg = document.getElementById("msg");
  if (candidates[input]) {
    window.open(candidates[input], "_blank");
    msg.textContent = "";
  } else {
    msg.textContent = "❌ Application number not found.";
  }
}



function closeWindow() {
  window.close();
}
