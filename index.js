// Navbar navigation functionality
$(".navbar-brand").click(function () {
    window.location.href = 'index.html';
});

$(".nav-link").click(function (e) {
    console.log((e.target.innerText).toLowerCase());

    switch (e.target.innerText) {
        case "ABOUT":
            $(document).scrollTop($("#about")[0].offsetTop - 66);
            break;

        case "CONTACT":
            $(document).scrollTop($("#contact")[0].offsetTop - 66);
            break;

        case "PRODUCTS":
            $(document).scrollTop($("#products")[0].offsetTop - 66);
            break;

        case "SERVICES":
            $(document).scrollTop($("#services")[0].offsetTop - 66);
            break;
    }
});