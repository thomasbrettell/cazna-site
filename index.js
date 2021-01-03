$(".navbar-brand").click(function () {
    $(document).scrollTop(0);
});

$(window).scroll(function () {
    scrollPos = $(document).scrollTop();
});

// Navbar
$(".nav-link").click(function (e) {
    switch (e.target.innerText) {
        case "ABOUT":
            $(document).scrollTop($("#about")[0].offsetTop - 66);
            break;

        case "CONTACT":
            $(document).scrollTop(0);
            break;

        case "PRODUCTS":
            $(document).scrollTop($("#products")[0].offsetTop - 66);
            break;

        case "SERVICES":
            $(document).scrollTop($("#services")[0].offsetTop - 66);
            break;
    }
})