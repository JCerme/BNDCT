open = false;
var filters = document.querySelector('.filters');
var filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', () => {
    if(open){
        filterBtn.classList.remove('active');
        filters.classList.remove('active');
        open = false;
    } else {
        filterBtn.classList.add('active');
        filters.classList.add('active');
        open = true;
    }
});