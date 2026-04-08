const Header: string = `
    <header>
        <div class="header-container flex justify-between items-center py-5 lg:px-15 md:px-7.5 px-5">
            <div class="logo">
                <a href="/" class="cursor-pointer">
                    <img class="w-7.5 md:w-10" src="/images/logo.png">
                </a>
            </div>
            <div class="menu z-[-1] md:z-1 [&.show]:z-2 md:w-max w-full m-0 md:relative absolute opacity-0 md:opacity-100 [&.show]:opacity-100 -top-full [&.show]:top-0 left-0 box-border transition-all duration-300 ease-linear bg-(--black) md:bg-transparent ">
                <ul class="
                    inline-block md:flex p-0 gap-5 list-none 
                    [.menu.show_&]:w-full [.menu.show_&]:py-7.5 [.menu.show_&]:px-10 [.menu.show_&]:box-border [.menu.show_&]:max-h-max
                    [&>li>a]:cursor-pointer [&>li>a]:block [&>li>a]:md:inline [&>li>a]:text-base [&>li>a]:md:text-(--black)! [&>li>a]:decoration-none [&>li>a]:font-[Inter]
                    [.menu.show_&>li>a]:text-(--white) [.menu.show_&>li>a]:p-1.5!
                ">
                    <button class="active:scale-90 transition-all duration-200 ease-linear cursor-pointer close-menu absolute p-0 m-0 w-7.5 border-0 bg-transparent right-5 top-5 hidden [.menu.show_&]:block!">
                        <img class="w-5" src="/images/close.svg">
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
                [&>button>img]:w-6
                [&>button:active]:scale-90
                [&>button]:transition-all [&>button]:duration-200 [&>button]:ease-linear [&>button]:cursor-pointer [&>button]:border-0 [&>button]:bg-transparent
            ">
                <button class="search">
                    <img src="/images/search.png">
                </button>
                <button class="shop relative">
                    <img src="/images/shop.png">
                    <span class="cart-count absolute -bottom-1.5 -right-2 hidden text-[10px] text-(--white) bg-(--brown) rounded-[15px] px-1.25 py-px"></span>
                </button> 
                <button class="burger inline md:hidden">
                    <img src="/images/menu.svg">
                </button>
            </div>
        </div>
    </header>
`;

export default Header;
