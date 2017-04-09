//<![CDATA[
function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        notif = document.getElementById("daplong"),
        direklink = document.getElementById("download").href,
        waktu = 6;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            notif.style.display = "none";
            linkDL.style.display = "inline";
        } else {
            teks_waktu.innerHTML = "<h2>Link will appear in " + waktu.toString() + " Second</h2>";
            btn.style.display = "none";
        }
    }, 1000);
}
//]]>