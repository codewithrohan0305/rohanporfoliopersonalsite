var typed = new Typed(".text", {
    strings:["Fresher", "Software Engineer"],
    textSpeed:80,
    backSpeed:80,
    timeDelay:20,
    loop:true
});

function scrollToSection(classname) {
    document.queryselector(classname).scrollIntoView({
    behavior : "smooth"
    });
}
