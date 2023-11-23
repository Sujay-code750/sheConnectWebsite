
/* const toggle = document.getElementsByClassName('toggle');
const sidebar = document.getElementsByClassName('sidebar')[0];

document.addEventListener('click', function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        for (let i = 0; i < toggle.length; i++) {
            toggle[i].classList.remove('active');
        }
        sidebar.classList.remove('active');
    }
});

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function (e) {
        e.stopPropagation();

        this.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
} */



const toggle = document.querySelectorAll('.toggle');
const sidebar = document.querySelector('.sidebar');

document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !toggleContainsTarget(e.target)) {
        removeActiveClasses();
    }
});

function toggleContainsTarget(target) {
    for (let i = 0; i < toggle.length; i++) {
        if (toggle[i].contains(target)) {
            return true;
        }
    }
    return false;
}

function removeActiveClasses() {
    for (let i = 0; i < toggle.length; i++) {
        toggle[i].classList.remove('active');
    }
    sidebar.classList.remove('active');
}

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}