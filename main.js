var typed = new Typed(".text", {
    strings:["Fresher", "Software Engineer"],
    textSpeed:80,
    backSpeed:80,
    timeDelay:20,
    loop:true
});

let scrollToSection = ()=>{
    document.queryselector("about").scrollIntoView({
    behavior : "smooth"
    });
}
