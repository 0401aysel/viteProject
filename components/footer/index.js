const Footer = `
    <footer class="bg-(--black) text-(--white)">
        <div class="inner-container p-[20px] lg:p-[30px] xl:p-[60px] ">
            <div class="footer-inner md:flex">
                <div class="footer-about flex-1 md:pr-[80px] pr-[10px] pb-[30px] md:pb-0">
                    <div class="footer-logo flex">
                        <a href="/" class="cursor-pointer"><img class="w-[30px] md:w-[40px]" src="/images/white-logo.png"></a>
                        <p class="logo-text text-xl md:text-3xl pl-[16px] m-0 font-bold">Ngopi</p>
                    </div>
                    <div class="footer-about-text md:block hidden py-[32px]">
                        <p class="m-0 text-(--white) leading-[160%]">
                            Discover tranquility at Ngopi a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.
                        </p>
                    </div>
                    <div class="footer-about-contact md:block hidden">
                        <a href="mailto:hello@ngopi.com" class="cursor-pointer text-(--white) decoration-none block leading-[160%] text-base">
                            hello@ngopi.com
                        </a>
                        <a href="tel:+01 23456789" class="cursor-pointer">
                            Phone: +01 23456789
                        </a>
                    </div>
                </div>
                <div class="footer-menu flex-2">
                    <div class="footer-menu-flex flex flex-wrap justify-between">
                        <div class="quicks">
                            <h3 class="md:text-2xl text-lg m-0 font-thin pr-[20px] font-[PlayFairDisplay]">Quick Links</h3>
                            <div class="menu-links py-[14px] md:py-[24px]">
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Services</a>
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Portfolio</a>
                                <a href="/about.html" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">About us</a>
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Testimonial</a>
                            </div>
                        </div>
                        <div class="resources">
                            <h3 class="md:text-2xl text-lg m-0 font-thin pr-[20px] font-[PlayFairDisplay]">Resources</h3>
                            <div class="menu-links py-[14px] md:py-[24px]">
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Support</a>
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Privacy Policy</a>
                                <a href="#" class="cursor-pointer text-(--white) block decoration-none text-sm leading-[28px]">Terms & Conditions</a>
                            </div>
                        </div>
                        <div class="social">
                            <h3 class="md:text-2xl text-lg m-0 font-thin pr-[20px] font-[PlayFairDisplay]">Social Media</h3>
                            <div class="social-links py-[24px] opacity-70">
                                <a href="#" class="cursor-pointer facebook px-[10px] py-[7px] inline-block bg-white/8 decoration-none">
                                    <img class="w-[18px]" src="/images/facebook.svg">
                                </a>
                                <a href="#" class="cursor-pointer twitter px-[10px] py-[7px] inline-block bg-white/8 decoration-none">
                                    <img class="w-[18px]" src="/images/twitter.svg">
                                </a>
                                <a href="#" class="cursor-pointer instagram px-[10px] py-[7px] inline-block bg-white/8 decoration-none">
                                    <img class="w-[18px]" src="/images/instagram.svg">
                                </a>
                                <a href="#" class="cursor-pointer linkedin px-[10px] py-[7px] inline-block bg-white/8 decoration-none">
                                    <img class="w-[18px]" src="/images/linkedin.svg">
                                </a>
                                <a href="#" class="cursor-pointer youtube px-[10px] py-[7px] inline-block bg-white/8 decoration-none">
                                    <img class="w-[18px]" src="/images/youtube.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="subscribe">
                        <h3 class="md:text-2xl text-lg m-0 font-thin pr-[20px] font-[PlayFairDisplay]">Subscribe</h3>
                        <form class="subscribe-form relative mt-[10px] md:mt-[24px]">
                            <label for="mail" class="absolute w-max block md:top-[18px] md:left-[20px] top-[14px] left-[13px]">
                                <img class="md:w-[24px] w-[18px]" src="/images/mail.png">
                            </label>
                            <input  id ="mail" class="transition-all duration-200 ease-linear subscibe-mail md:h-[59px] h-[46px] pl-[40px] md:pl-[50px] text-(--white) bg-white/12 rounded-[16px] w-full box-border placeholder:opacity-0 md:placeholder:opacity-100 placeholder:text-base placeholder:font-[Poppins] placeholder:text-white/40" name="mail" placeholder="name@domain.com"/>
                            <button type="submit" class="active:scale-90 transition-all duration-200 ease-linear cursor-pointer absolute font-[Poppins] md:top-[17px] top-[6px] right-[6px] md:right-[18px]">Send</button>
                            <p class="mail-error text-white text-xs"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;
export default Footer;