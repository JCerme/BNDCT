const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY-15) + "px; left: " + (e.pageX-15) + "px;")
});
var longitud = document.getElementsByTagName("a").length;
for (i = 0; i < longitud; i++) {
    var enlace = document.getElementsByTagName("a")[i];
    enlace.addEventListener('mouseover', e => {
        cursor.classList.add("link");
    });
    enlace.addEventListener('mouseout', e => {
        cursor.classList.remove("link");
    });
}