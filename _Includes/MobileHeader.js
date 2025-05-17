var openElements = document.getElementsByClassName("open-mobile-nav");

for (var i = 0; i < openElements.length; i++) {
    openElements[i].addEventListener('click', function () {
        document.getElementsByTagName("body")[0].classList.add("mobile-nav-open");
    });
}

var closeElements = document.getElementsByClassName("close-mobile-nav");

for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener('click', function () {
        document.getElementsByTagName("body")[0].classList.remove("mobile-nav-open");
    });
}