window.onscroll = () => {
    var header = document.getElementsByTagName("header")[0];
    if(window.pageYOffset>20){
        header.classList.add("bgVisible");
    }  else {
        header.classList.remove("bgVisible");
    }
}