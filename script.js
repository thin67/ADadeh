
console.log("SCRIPT JS BERHASIL DIBACA!");
const tombol = document.getElementById("ultah");
const video = document.getElementById("videoUltah");
const popup = document.getElementById("videoPopup");
const tombolTutup = document.getElementById("tutupVideo");

tombol.addEventListener("click", function() {
    popup.hidden = false;

    video.play().catch(function(error) {
        console.log("Video gagal diputar:", error);
    });
});

tombol.addEventListener("click", async function() {
    popup.hidden = false;

    try {
        await video.play();
        console.log("Video berhasil diputar!");
    } catch (error) {
        console.log("Penyebab video gagal:", error);
    }
});
