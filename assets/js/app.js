$(document).ready(function () {
    $('.menu').click(function () {
        $('.default-menu-image').toggleClass('d-none');
        $('.active-menu-image').toggleClass('d-none');
        $('.menus').toggleClass('open');
    });

    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var main__header = document.querySelector(".header");
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            main__header.classList.add("hidden_top");
        } else {
            main__header.classList.remove("hidden_top");
        }
        position = scroll;
        if (window.pageYOffset >= 200) {
            main__header.classList.add("fixed_top");
        } else {
            main__header.classList.remove("fixed_top");
        }

    });

    $('.add').click(function () {
        var th = $(this).closest('.wrap-quantity-button').find('.count');
        th.val(+th.val() + 1);
    });
    $('.sub').click(function () {
        var th = $(this).closest('.wrap-quantity-button').find('.count');
        if (th.val() > 0) th.val(+th.val() - 1);
    });
    $('.password-hide').click(function () {
        $('.password-field').attr('type', 'text');
        $('.password-hide').addClass('d-none');
        $('.password-open').removeClass('d-none');
    });
    $('.password-open').click(function () {
        $('.password-field').attr('type', 'password');
        $('.password-open').addClass('d-none');
        $('.password-hide').removeClass('d-none');
    });


    // Cart Add Close Button
    $('.cart-add').click(function () {
        $('.footer-buttons').addClass('show');
        $('body').addClass('hasOverly');
    });
    $('.close-cart').click(function () {
        $('.footer-buttons').removeClass('show');
        $('body').removeClass('hasOverly');
    });


    // View Product Full Image
    $('.food-left-side').click(function () {
        var thisElement = $(this.childNodes[1]);
        var imageSrc = thisElement[0].children[0].currentSrc;
        $('.right-area-dynamic-image').css("background-image", "url(" + imageSrc + ")");
    });



    $('.places-radios').click(function (ev) {
        ev.preventDefault();
        $('.places-radios').removeClass('active-place');
        $(ev.target.childNodes[1]).prop('checked', true);
        $(ev.target).addClass('active-place');
    });



});



// Functions 


let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    let progress = (n / (x.length - 1)) * 100;
    document.getElementById("prevBtn")
        .style.display = n == 0 ? "none" : "block";
    document.getElementById("nextBtn")
        .style.display = n > 1 ? "none" : "block";
}

function nextPrev(n) {
    let x = document.getElementsByClassName("step");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab += n;
    if (currentTab >= x.length) {
        resetForm();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let valid = true;
    return valid;
}

function resetForm() {
    let x = document.getElementsByClassName("step");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
    currentTab = 0;
    showTab(currentTab);
    document.getElementById("prevBtn")
        .style.display = "none";
}
function place_order() {
    $('.main-order-modal').empty();
    $('.modal-footer').remove();
    $('.modal-header').empty();
    $('.main-order-modal').append("<div class='text-center'><img src='./assets/img/icon-png/check-mark-success.png' width='80px' alt='Check Mark Success'><h3 class='fs-2 color-a my-3'>Congratulations!</h3><p class='color-paragraph fw-500 pb-4 mb-1 px-5'>Your order has been placed and you will get shipping confirmation soon.</p></div>");
    $('.modal-header').append("<a href='javascript:void(0)' onclick='close_all()' class='final-close-all hover-color-a color-b'><i class='fa fa-times'></i></a>");
}
function close_all() {
    window.location.href = 'index.html';
}


let currentTabpicup = 0;
showTabPick(currentTabpicup);

function showTabPick(n) {
    let p = document.getElementsByClassName("stepsPickup");
    p[n].style.display = "block";
    let progress = (n / (p.length - 1)) * 100;
    document.getElementById("prevBtn2")
        .style.display = n == 0 ? "none" : "block";
    document.getElementById("nextBtn2")
        .style.display = n > 1 ? "none" : "block";
}

function nextPrevpickup(n) {
    let p = document.getElementsByClassName("stepsPickup");
    if (n == 1 && !validateForm()) return false;
    p[currentTabpicup].style.display = "none";
    currentTabpicup += n;
    if (currentTabpicup >= p.length) {
        resetForm();
        return false;
    }
    showTabPick(currentTabpicup);
}

$(document).ready(function () {
    $('.custom_radio').change(function () {

        if (this.value == 'shedule') {
            $('.pickup_time_input').removeClass('d-none')
        } else {
            $('.pickup_time_input').addClass('d-none')
        }
    });
    $('.timepicker').mdtimepicker();
});