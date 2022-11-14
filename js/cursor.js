const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
});

var longitud = document.getElementsByTagName("a").length;
for(i=0; i<longitud;i++){
    var enlace = document.getElementsByTagName("a")[i];
    enlace.addEventListener('mouseover', () => {
        cursor.classList.remove("cursor");
        cursor.classList.add("link");
    });
    enlace.addEventListener('mouseout', () => {
        cursor.classList.remove("link");
        cursor.classList.add("cursor");
    });
}