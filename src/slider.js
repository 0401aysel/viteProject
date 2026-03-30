
let sliderLoad = document.querySelectorAll('.coffee-slider');
let buttons = document.querySelectorAll('.product-types button');
let shop = document.querySelector('.cart-count');
let cart ={};

buttons.forEach(elem => {
    elem.addEventListener('click',(event)=>{
        buttons.forEach(elem => {
            elem.classList.remove('active');
        });
        event.target.classList.add('active');
        let sliderItem=`.slider${event.target.dataset.id}`;
        sliderLoad.forEach(elem => {
            elem.classList.add('hidden');
        });

        let sliderElem = document.querySelector(sliderItem);
        sliderElem.classList.remove('hidden');
    });
});

async function handleData(){
    let res = await fetch('./components/products.json');
    let data = await res.json();

    renderSlide(data.filter( item => { return item.cat_id == 1}  ), '.slider1 .slider-items');
    renderSlide(data.filter( item => {return item.cat_id == 2}  ), '.slider2 .slider-items');
    renderSlide(data.filter( item => {return item.cat_id == 3}  ), '.slider3 .slider-items');
}

handleData();

function renderSlide(data, selector){
    const container = document.querySelector(selector);

    container.innerHTML = '';

    data.forEach(item =>{
        const div = document.createElement('div');
        div.className = 'slider-item p-[10px] md:m-[6px] md:mb-[20px] m-[10px] box-border flex-shrink-0 shadow-[0_0_5px_-3px_#282a3a70] md:w-[calc(100%/3-18px)] sm:w-[calc(100%/2-20px)] w-full';

        div.innerHTML = `
            <a href="/product.html" class="cursor-pointer product-card-link decoration-none">
                <div class="radius-1">
                    <img class="item-img w-full" src="/images/${item.img}">
                </div>
                <p class="product-name font-[PlusJakartaSans] text-(--black) leading-[140%] my-[10px] text-xl lg:text-2xl">${item.name}</p>
            </a>

            <div class="rate flex items-center">
                <img class="w-[20px]" src="/images/star.svg">
                <p class="text-xl mx-[7px] text-[rgba(40,42,58,0.7)]">${item.rate}</p>
                <span class="text-base text-[rgba(40,42,58,0.72)]">(${item.review} reviews)</span>
            </div>

            <p class="about-coffee text-base text-[rgba(40,42,58,0.72)]">
            Lorem ipsum dolor sit amet consectetur.
            </p>

            <div class="addToCart flex justify-between items-center">
                <div>
                    <span class="price mr-[3px] text-xl text-[rgba(40,42,58,0.7)] font-bold">${item.price}</span>
                    <span class="mr-[3px] text-xl text-[rgba(40,42,58,0.7)] font-bold">$</span>
                </div>
                <button class="active:scale-90 transition-all duration-200 ease-linear add-to-cart p-0 border-0 rounded-[8px] w-[60px] h-[31px] lg:w-[80px] lg:h-[38px] bg-(--brown) transition-transform duration-100 ease-linear">
                    <img class="m-auto w-[20px] h-[20px]" src="/images/plus.svg">
                </button>
            </div>
        `;

        container.appendChild(div);

        div.querySelector('.add-to-cart').addEventListener('click',()=>{
            if(cart[item.id]){
                cart[item.id].count++;
            }else{
                cart[item.id] = {
                    'id':item.id,
                    'count':1,
                };
            };

            if(Object.keys(cart).length > 0){
                let countProducts = 0;

                for( let product of Object.values(cart)){
                    countProducts += product.count;
                };

                shop.innerHTML=countProducts;
                shop.style.display='inline-block';
            }else{
                shop.innerHTML='0';
                shop.style.display='none';
            }
        });

    });
}


