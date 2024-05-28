var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets)
{
    crsr.style.left= dets.x +30+"px"
    crsr.style.top= dets.y+"px"
    blur.style.left= dets.x-250+"px"
    blur.style.top= dets.y-250+"px"
})
var h4all = document.querySelectorAll("#nav h3")
{
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 3
            crsr.style.border = "1px solid #fff"
            crsr.style.backgroundColor = "transparent"
        })
    })
    h4all.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = "0px solid #e76d6d"
            crsr.style.backgroundColor = "e76d6d"
        })
    })

}
function animateAboutUs(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutUsImg1 = entry.target.querySelector("img:first-of-type");
            const aboutUsImg2 = entry.target.querySelector("img:last-of-type");
            const aboutUsText = entry.target.querySelector("#about-us-in");
            aboutUsImg1.style.opacity = 0;
            aboutUsImg1.style.transform = "translateX(-50px) scale(0.5)";
            aboutUsImg1.style.transition = "opacity 3s ease, transform 3s ease";
            setTimeout(() => {
                aboutUsImg1.style.opacity = 1;
                aboutUsImg1.style.transform = "translateX(0) scale(1)";
            }, 100);

            aboutUsImg2.style.opacity = 0;
            aboutUsImg2.style.transform = "translateX(50px) scale(0.5)";
            aboutUsImg2.style.transition = "opacity 3s ease, transform 3s ease";
            setTimeout(() => {
                aboutUsImg2.style.opacity = 1;
                aboutUsImg2.style.transform = "translateX(0) scale(1)";
            }, 100);

            aboutUsText.style.opacity = 0;
            aboutUsText.style.transform = "translateY(50px)";
            aboutUsText.style.transition = "opacity 3s ease, transform 3s ease";
            setTimeout(() => {
                aboutUsText.style.opacity = 1;
                aboutUsText.style.transform = "translateY(0)";
            }, 100);
        }
    });
}

const observerOptions = {
    threshold: 1 
};

const observer = new IntersectionObserver(animateAboutUs, observerOptions);

const aboutUsSection = document.querySelector("#About-us");

observer.observe(aboutUsSection);

document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.getElementById('arrow');

    arrow.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.menu-container .box .content a');

    let cartCounter = document.getElementById('cart-counter');
    if (!cartCounter) {
        cartCounter = document.createElement('div');
        cartCounter.id = 'cart-counter';
        document.body.appendChild(cartCounter);
    }
    let itemCount = parseInt(cartCounter.textContent) || 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            itemCount++;
            cartCounter.textContent = itemCount;

            const menuItem = button.closest('.box');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('.content span').textContent;

            console.log('Added to cart:', itemName, '-', itemPrice);
        });
    });
});


