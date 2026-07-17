document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Tombol Login
    // ==============================

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.open("https://oddigondx.pro/", "_blank");
        });
    }


    // ==============================
    // Tombol Daftar
    // ==============================

    const registerBtn = document.getElementById("registerBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            window.open("https://oddigondx.pro/", "_blank");
        });
    }


    // ==============================
    // LiveChat Header
    // ==============================

    const livechatBtn = document.getElementById("livechat-btn");

    if (livechatBtn) {
        livechatBtn.addEventListener("click", function (event) {
            event.preventDefault();
            openLiveChat();
        });
    }


    // ==============================
    // Fungsi LiveChat
    // ==============================

    function openLiveChat() {
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call("maximize");
        } else {
            alert("LiveChat sedang dimuat, silakan coba kembali sebentar lagi.");
        }
    }


    // ==============================
    // Judul Hero
    // ==============================

    const judul = document.getElementById("judul");

    if (judul) {

        judul.addEventListener("mouseover", function () {
            judul.style.color = "red";
        });

        judul.addEventListener("mouseout", function () {
            judul.style.color = "#16b316";
        });
    }


    // ==============================
    // Animated Counter
    // ==============================

    function animateCounter(id, target, speed) {
        const element = document.getElementById(id);

        if (!element) {
            return;
        }

        let counter = 0;
        const increment = Math.ceil(target / speed);

        const timer = setInterval(function () {
            counter += increment;

            if (counter >= target) {
                counter = target;
                clearInterval(timer);
            }

            element.textContent = counter.toLocaleString("id-ID");
        }, 20);
    }

    animateCounter("memberCounter", 255000, 50);
    animateCounter("wdCounter", 7568923000, 800);


    // ==============================
    // Sticky Header
    // ==============================

    const header = document.querySelector("header");

    function updateHeader() {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 50);
    }


    // ==============================
    // Scroll Reveal
    // ==============================

    const reveals = document.querySelectorAll(".reveal");

    function revealSection() {
        const windowHeight = window.innerHeight;

        reveals.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - 120) {
                section.classList.add("active");
            }
        });
    }


    // Gabungkan pekerjaan scroll agar lebih ringan
    window.addEventListener(
        "scroll",
        function () {
            updateHeader();
            revealSection();
            updateBackToTop();
        },
        { passive: true }
    );

    updateHeader();
    revealSection();


    // ==============================
    // Testimoni Slider
    // ==============================

    const testiText = document.getElementById("testiText");
    const testiName = document.getElementById("testiName");

    const dataTestimoni = [
        {
            text: "WD Rp12.500.000 masuk kurang dari 2 menit. Mantap!",
            name: "Andi - Jakarta"
        },
        {
            text: "Deposit cepat, CS ramah, dan prosesnya mudah.",
            name: "Rian - Medan"
        },
        {
            text: "Tampilan situs nyaman dan pelayanan 24 jam.",
            name: "Dewi - Surabaya"
        }
    ];

    let testiIndex = 0;

    if (testiText && testiName) {
        setInterval(function () {
            testiIndex = (testiIndex + 1) % dataTestimoni.length;

            testiText.textContent = dataTestimoni[testiIndex].text;
            testiName.textContent = dataTestimoni[testiIndex].name;
        }, 3000);
    }


    // ==============================
    // FAQ Accordion
    // ==============================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!button || !answer) {
            return;
        }

        button.addEventListener("click", function () {
            item.classList.toggle("open");

            if (item.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });


    // ==============================
    // LiveChat Footer
    // ==============================

    const footerLivechat = document.getElementById("footerLivechat");

    if (footerLivechat) {
        footerLivechat.addEventListener("click", function (event) {
            event.preventDefault();
            openLiveChat();
        });
    }


    // ==============================
    // Floating LiveChat
    // ==============================

    const floatingLivechat =
        document.getElementById("floatingLivechat");

    if (floatingLivechat) {
        floatingLivechat.addEventListener("click", openLiveChat);
    }


    // ==============================
    // Back To Top
    // ==============================

    const backToTop = document.getElementById("backToTop");

    function updateBackToTop() {
        if (!backToTop) {
            return;
        }

        const isVisible = window.scrollY > 400;

        backToTop.style.opacity = isVisible ? "1" : "0";
        backToTop.style.visibility =
            isVisible ? "visible" : "hidden";
    }

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    updateBackToTop();


    // ==============================
    // Popup Promo
    // ==============================

    const promoPopup = document.getElementById("promoPopup");
    const promoClose = document.getElementById("promoClose");
    const promoOverlay = document.getElementById("promoOverlay");

    function openPromo() {
        if (promoPopup) {
            promoPopup.classList.add("show");
        }
    }

    function closePromo() {
        if (promoPopup) {
            promoPopup.classList.remove("show");
        }
    }

    if (promoClose) {
        promoClose.addEventListener("click", closePromo);
    }

    if (promoOverlay) {
        promoOverlay.addEventListener("click", closePromo);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePromo();
    }
    });



    // ==============================
    // Statistik Live
    // ==============================

    const onlineUsers = document.getElementById("onlineUsers");
    const transactionsToday =
        document.getElementById("transactionsToday");

    let onlineValue = 1250;
    let transactionValue = 3480;

    function updateLiveStats() {
        if (!onlineUsers || !transactionsToday) {
            return;
        }

        const onlineChange =
            Math.floor(Math.random() * 11) - 5;

        const transactionChange =
            Math.floor(Math.random() * 4);

        onlineValue += onlineChange;
        transactionValue += transactionChange;

        if (onlineValue < 1200) {
            onlineValue = 1200;
        }

        onlineUsers.textContent =
            onlineValue.toLocaleString("id-ID");

        transactionsToday.textContent =
            transactionValue.toLocaleString("id-ID");
    }

    if (onlineUsers && transactionsToday) {
        setInterval(updateLiveStats, 3000);
    }

});


window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {
        loadingScreen.remove();
    }
});
