// ==============================
// Tombol Login
// ==============================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    window.open("https://oddigondx.pro/", "_blank");

});

// ==============================
// Tombol Daftar
// ==============================

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {

    window.open("https://https://oddigondx.pro/", "_blank");

});


// ==============================
// Tombol LiveChat
// ==============================

const livechatBtn = document.getElementById("livechat-btn");

livechatBtn.addEventListener("click", function (e) {

    e.preventDefault();

    if (window.LiveChatWidget) {

        LiveChatWidget.call("maximize");

    } else {

        alert("LiveChat sedang dimuat...");

    }

});

judul.style.fontSize="70px";   

judul.style.textTransform="uppercase";

judul.addEventListener("mouseover",function(){

judul.style.color="red";

});
judul.addEventListener("mouseout",function(){

judul.style.color="#16b316";

});
function animateCounter(id, target, speed){

let counter = 0;

const element = document.getElementById(id);

const increment = Math.ceil(target / speed);

const timer = setInterval(function(){

counter += increment;

if(counter >= target){

counter = target;

clearInterval(timer);

}

element.innerHTML = counter.toLocaleString();

},20);

}
animateCounter("memberCounter",255000,50);

animateCounter("wdCounter",7568923000,800);

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", function(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(item){
        const windowHeight = window.innerHeight;
        const itemTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if(itemTop < windowHeight - revealPoint){
            item.classList.add("active");
        }
    });
});

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

setInterval(function(){
    testiIndex++;

    if(testiIndex >= dataTestimoni.length){
        testiIndex = 0;
    }

    document.getElementById("testiText").innerHTML = dataTestimoni[testiIndex].text;
    document.getElementById("testiName").innerHTML = dataTestimoni[testiIndex].name;

}, 3000);

// =========================
// Scroll Animation
// =========================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);

function revealSection(){

    reveals.forEach(function(section){

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

revealSection();

const faq = document.querySelectorAll(".faq-item");

faq.forEach(function(item){

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", function(){

        item.classList.toggle("open");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("open")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});

const footerLivechat = document.getElementById("footerLivechat");

if(footerLivechat){
    footerLivechat.addEventListener("click", function(e){
        e.preventDefault();

        if(window.LiveChatWidget){
            LiveChatWidget.call("maximize");
        }else{
            alert("LiveChat sedang dimuat, silakan coba kembali sebentar lagi.");
        }
    });
}

const floatingLivechat = document.getElementById("floatingLivechat");

if(floatingLivechat){
    floatingLivechat.addEventListener("click", function(){

        if(window.LiveChatWidget){
            LiveChatWidget.call("maximize");
        }else{
            alert("LiveChat sedang dimuat, silakan coba kembali sebentar lagi.");ya 
        }

    });
}

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        backToTop.style.opacity = "1";

        backToTop.style.visibility = "visible";

    }else{

        backToTop.style.opacity = "0";

        backToTop.style.visibility = "hidden";

    }

});
backToTop.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("load", function(){

    const loadingScreen = document.getElementById("loadingScreen");

    if(!loadingScreen){
        return;
    }

    if(window.innerWidth <= 768){
        loadingScreen.remove();
        return;
    }


    });

});

const promoPopup = document.getElementById("promoPopup");
const promoClose = document.getElementById("promoClose");
const promoOverlay = document.getElementById("promoOverlay");



function closePromo(){
    promoPopup.classList.remove("show");
}

promoClose.addEventListener("click", closePromo);
promoOverlay.addEventListener("click", closePromo);

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){
        closePromo();
    }

});

const onlineUsers = document.getElementById("onlineUsers");
const transactionsToday = document.getElementById("transactionsToday");

let onlineValue = 1250;
let transactionValue = 3480;

function updateLiveStats(){

    const onlineChange = Math.floor(Math.random() * 11) - 5;
    const transactionChange = Math.floor(Math.random() * 4);

    onlineValue += onlineChange;
    transactionValue += transactionChange;

    if(onlineValue < 1200){
        onlineValue = 1200;
    }

    onlineUsers.textContent = onlineValue.toLocaleString("id-ID");
    transactionsToday.textContent =
        transactionValue.toLocaleString("id-ID");
}

setInterval(updateLiveStats, 3000);
