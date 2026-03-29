const Header =`
    <header>
        <div class="header-container flex justify-between items-center py-[20px] lg:px-[60px] md:px-[30px] px-[20px] ">
            <div class="logo">
                <a href="/">
                    <img class="w-[30px] md:w-[40px]" src="/images/logo.png">
                </a>
            </div>
            <div class="menu">
                <ul class="inline-block md:flex p-0 gap-[20px] list-none [.menu.show_&]:w-full [.menu.show_&]:py-[30px] [.menu.show_&]:px-[40px] [.menu.show_&]:box-border [.menu.show_&]:max-h-max">
                    <button class="close-menu absolute p-0 m-0 w-[30px] border-0 bg-transparent right-[20px] top-[20px] hidden [.menu.show_&]:!block">
                        <img class="w-[20px]" src="/images/close.svg">
                    </button>
                    <li class="block md:inline">
                        <a class="block md:inline [.menu.show_&]:!text-(--white) [.menu.show_&]:!p-[6px] text-base md:text-(--black) decoration-none font-[Inter]" href="/">Home</a>
                    </li>
                    <li class="block md:inline">
                        <a class="block md:inline [.menu.show_&]:!text-(--white) [.menu.show_&]:!p-[6px] text-base md:text-(--black) decoration-none font-[Inter]" href="#">Products</a>
                    </li>
                    <li class="block md:inline">
                        <a class="block md:inline [.menu.show_&]:!text-(--white) [.menu.show_&]:!p-[6px] text-base md:text-(--black) decoration-none font-[Inter]" href="about.html">About us</a>
                    </li>
                    <li class="block md:inline">
                        <a class="block md:inline [.menu.show_&]:!text-(--white) [.menu.show_&]:!p-[6px] text-base md:text-(--black) decoration-none font-[Inter]" href="#">Testimonial</a>
                    </li>
                    <li class="block md:inline">
                        <a class="block md:inline [.menu.show_&]:!text-(--white) [.menu.show_&]:!p-[6px] text-base md:text-(--black) decoration-none font-[Inter]" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="header-left">
                <button class="search bg-transparent border-0">
                    <img class="w-[24px]" src="/images/search.png">
                </button>
                <button class="shop bg-transparent border-0 relative">
                    <img class="w-[24px]" src="/images/shop.png">
                    <span class="cart-count absolute bottom-[-6px] right-[-8px] hidden text-[10px] text-(--white) bg-(--brown) rounded-[15px] px-[5px] py-[1px]"></span>
                </button> 
                <button class="burger inline md:hidden bg-transparent border-0">
                    <img class="w-[24px]" src="/images/menu.svg">
                </button>
            </div>
        </div>
    </header>
`;

export default  Header;