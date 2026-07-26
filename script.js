/*================================================
    3ZOZ TRADING WEBSITE
    MAIN JAVASCRIPT
================================================*/


document.addEventListener("DOMContentLoaded",()=>{


    //==============================
    // CARDS ANIMATION
    //==============================


    const elements = document.querySelectorAll(
        ".service-card, .why-box, .package-card, .contact-card, .stat-item"
    );


    elements.forEach((el,index)=>{


        el.style.opacity="0";
        el.style.transform="translateY(40px)";
        el.style.transition="0.6s ease";


        setTimeout(()=>{

            el.style.opacity="1";
            el.style.transform="translateY(0)";


        }, index * 150);


    });



});






//==============================
// COUNTER ANIMATION
//==============================


const counters = document.querySelectorAll(".stat-item h2");

let counterStarted = false;



function runCounter(){


    if(counterStarted) return;


    const stats =
    document.querySelector(".stats");


    if(!stats) return;



    const position =
    stats.offsetTop - window.innerHeight + 200;



    if(window.scrollY > position){


        counterStarted = true;



        counters.forEach(counter=>{


            let number =
            counter.innerText
            .replace("+","")
            .replace("/7","");



            if(!isNaN(number)){


                let current = 0;

                let speed =
                number / 50;



                let timer =
                setInterval(()=>{


                    current += speed;



                    if(current >= number){


                        counter.innerText =
                        "+" + number;


                        clearInterval(timer);


                    }else{


                        counter.innerText =
                        "+" + Math.floor(current);


                    }



                },30);



            }


        });



    }



}



window.addEventListener(
"scroll",
runCounter
);







//==============================
// SCROLL TO TOP BUTTON
//==============================



const topButton =
document.createElement("button");


topButton.className =
"scroll-top";


topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';



document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.classList.add("show");


    }else{


        topButton.classList.remove("show");


    }


});





topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});





//==============================
// CURRENT YEAR FOOTER
//==============================


const year =
document.querySelector(".footer p");


if(year){


    year.innerHTML =
    `3ZOZ TRADING © ${new Date().getFullYear()} جميع الحقوق محفوظة`;


}

//================================================
// MOBILE MENU SUPPORT
//================================================


const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


if(menuBtn && navbar){


    menuBtn.addEventListener("click",()=>{


        navbar.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });



}




//================================================
// CLOSE MOBILE MENU AFTER CLICK
//================================================


const navLinks =
document.querySelectorAll(".navbar a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navbar){

            navbar.classList.remove("active");

        }


    });


});






//================================================
// SMOOTH SCROLL LINKS
//================================================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }



    });


});






//================================================
// LIVE TIME MARKET STATUS
//================================================


function marketStatus(){


    const status =
    document.querySelector(".market-status");



    if(status){


        const now =
        new Date();



        status.innerHTML =
        `
        <span></span>
        السوق مباشر الآن
        ${now.toLocaleTimeString("ar-EG")}
        `;


    }


}



setInterval(
    marketStatus,
    1000
);



marketStatus();






//================================================
// PAGE LOAD EFFECT
//================================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});






//================================================
// IMAGE LAZY LOADING
//================================================


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.setAttribute(
        "loading",
        "lazy"
    );


});






//================================================
// DISABLE RIGHT CLICK (OPTIONAL)
//================================================


// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// });


