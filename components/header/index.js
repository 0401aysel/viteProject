const Header =`
    <header>
        <div class="header-container flex justify-between items-center py-[20px] lg:px-[60px] md:px-[30px] px-[20px] ">
            <div class="logo">
                <a href="/" class="cursor-pointer">
                    <img class="w-[30px] md:w-[40px]" src="/images/logo.png">
                </a>
            </div>
            <div class="menu">
                <ul class="
                    inline-block md:flex p-0 gap-[20px] list-none 
                    [.menu.show_&]:w-full [.menu.show_&]:py-[30px] [.menu.show_&]:px-[40px] [.menu.show_&]:box-border [.menu.show_&]:max-h-max
                    [&>li>a]:cursor-pointer [&>li>a]:block [&>li>a]:md:inline [&>li>a]:text-base [&>li>a]:md:text-(--black) [&>li>a]:decoration-none [&>li>a]:font-[Inter]
                    [.menu.show_&>li>a]:!text-(--white) [.menu.show_&>li>a]:!p-[6px]
                ">
                    <button class="active:scale-90 transition-all duration-200 ease-linear cursor-pointer close-menu absolute p-0 m-0 w-[30px] border-0 bg-transparent right-[20px] top-[20px] hidden [.menu.show_&]:!block">
                        <img class="w-[20px]" src="/images/close.svg">
                    </button>
                    <li class="block md:inline">
                        <a href="/">Home</a>
                    </li>
                    <li class="block md:inline">
                        <a href="#">Products</a>
                    </li>
                    <li class="block md:inline">
                        <a href="about.html">About us</a>
                    </li>
                    <li class="block md:inline">
                        <a href="#">Testimonial</a>
                    </li>
                    <li class="block md:inline">
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="
                header-left
                [&>button>img]:w-[24px]
                [&>button:active]:scale-90
                [&>button]:transition-all [&>button]:duration-200 [&>button]:ease-linear [&>button]:cursor-pointer [&>button]:border-0 [&>button]:bg-transparent
            ">
                <button class="search">
                    <img src="/images/search.png">
                </button>
                <button class="shop relative">
                    <img src="/images/shop.png">
                    <span class="cart-count absolute bottom-[-6px] right-[-8px] hidden text-[10px] text-(--white) bg-(--brown) rounded-[15px] px-[5px] py-[1px]"></span>
                </button> 
                <button class="burger inline md:hidden">
                    <img src="/images/menu.svg">
                </button>
            </div>
        </div>
    </header>
`;

export default  Header;