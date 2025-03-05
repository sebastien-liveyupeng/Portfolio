let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    const showItems = () => {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 150); // Décalage pour un effet progressif
        });
    };

    showItems();
});
