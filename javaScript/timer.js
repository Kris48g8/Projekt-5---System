document.addEventListener("DOMContentLoaded", function() {
    manuelAutosaver();
});
var active = false;
function manuelAutosaver() {
    window.setInterval(function() {
        if (active === false) {
            active = true;
            /* Javascript der kalder hvordan et css skal display i dette tilfælde "block"(visible) */
            document.getElementById('notifier').style.display = "block";
        } else {
            active = false;
            /* Javascript der kalder hvordan et css skal display i dette tilfælde "none"(invisible) */
            document.getElementById('notifier').style.display = "none";

        }
        }, 2500);
}