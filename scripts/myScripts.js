function getMyDate() {
  var e = new Date(),
    e = (e.toLocaleDateString(), e.toLocaleTimeString());
  document.getElementById("timee").innerHTML = `<text>${e}</text>`;
}
getMyDate(),
  setInterval(function () {
    getMyDate();
  }, 1e3);
