let sliderLoad = document.querySelectorAll<HTMLElement>('.coffee-slider');
let buttons = document.querySelectorAll<HTMLElement>('.product-types button');
let shop = document.querySelector('.cart-count') as HTMLElement;

interface ICartItem {
  id: number;
  count: number;
}

let cart: Record<number, ICartItem> = {};

interface IProduct {
  id: number;
  name: string;
  img: string;
  rate: number;
  review: number;
  price: number;
  cat_id: number;
}

buttons.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    buttons.forEach((elem) => {
      elem.classList.remove('active');
    });

    let currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('active');
    let sliderItem = `.slider${currentTarget.dataset.id}`;
    sliderLoad.forEach((elem) => {
      elem.classList.add('hidden');
    });

    let sliderElem = document.querySelector(sliderItem) as HTMLElement;
    sliderElem.classList.remove('hidden');
  });
});

async function handleData() {
  let res = await fetch('./components/products.json');
  let data: IProduct[] = await res.json();

  renderSlide(
    data.filter((item) => {
      return item.cat_id == 1;
    }),
    '.slider1 .slider-items',
  );
  renderSlide(
    data.filter((item) => {
      return item.cat_id == 2;
    }),
    '.slider2 .slider-items',
  );
  renderSlide(
    data.filter((item) => {
      return item.cat_id == 3;
    }),
    '.slider3 .slider-items',
  );
}

handleData();

function renderSlide(data: IProduct[], selector: string) {
  const container = document.querySelector(selector) as HTMLElement;

  container.innerHTML = '';

  data.forEach((item) => {
    const div = document.createElement('div') as HTMLElement;
    div.className = 'slider-item';

    div.innerHTML = `
            <a href="/product.html" class="cursor-pointer product-card-link decoration-none">
                <div class="radius-1">
                    <img class="item-img w-full" src="/images/${item.img}">
                </div>
                <p class="product-name font-[PlusJakartaSans] text-(--black) leading-[140%] my-2.5 text-xl lg:text-2xl">${item.name}</p>
            </a>

            <div class="rate flex items-center">
                <img class="w-2.5" src="/images/star.svg">
                <p class="text-xl mx-1.75 text-[rgba(40,42,58,0.7)]">${item.rate}</p>
                <span class="text-base text-[rgba(40,42,58,0.72)]">(${item.review} reviews)</span>
            </div>

            <p class="about-coffee text-base text-[rgba(40,42,58,0.72)]">
            Lorem ipsum dolor sit amet consectetur.
            </p>

            <div class="addToCart flex justify-between items-center [&>div>span]:mr-0.75 [&>div>span]:text-xl [&>div>span]:font-bold [&>div>span]:text-[rgba(40,42,58,0.7)]">
                <div>
                    <span class="price">${item.price}</span>
                    <span>$</span>
                </div>
                <button class="active:scale-90 transition-all add-to-cart p-0 border-0 rounded-lg w-15 h-7.75 lg:w-20 lg:h-9.5 bg-(--brown) duration-100 ease-linear">
                    <img class="m-auto w-5 h-5" src="/images/plus.svg">
                </button>
            </div>
        `;

    container.appendChild(div);

    let addToCart = div.querySelector('.add-to-cart') as HTMLElement;
    addToCart.addEventListener('click', () => {
      if (cart[item.id]) {
        cart[item.id].count++;
      } else {
        cart[item.id] = {
          id: item.id,
          count: 1,
        };
      }

      if (Object.keys(cart).length > 0) {
        let countProducts = 0;

        for (let product of Object.values(cart)) {
          countProducts += product.count;
        }

        shop.innerHTML = `${countProducts}`;
        shop.style.display = 'inline-block';
      } else {
        shop.innerHTML = '0';
        shop.style.display = 'none';
      }
    });
  });
}
