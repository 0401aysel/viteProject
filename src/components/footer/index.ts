const Footer: string = `
    <footer class="bg-(--black) text-(--white)">
        <div class="inner-container p-5 lg:p-7.5 xl:p-15 ">
            <div class="footer-inner md:flex">
                <div class="footer-about flex-1 md:pr-20 pr-2.5 pb-7.5 md:pb-0">
                    <div class="footer-logo flex">
                        <a href="/" class="cursor-pointer"><img class="w-7.5 md:w-10" src="/images/white-logo.png"></a>
                        <p class="logo-text text-xl md:text-3xl pl-4 m-0 font-bold">Ngopi</p>
                    </div>
                    <div class="footer-about-text md:block hidden py-8">
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
                    <div class="
                        footer-menu-flex flex flex-wrap justify-between
                        [&>div>h3]:md:text-2xl [&>div>h3]:text-lg [&>div>h3]:m-0 [&>div>h3]:font-thin [&>div>h3]:pr-5 [&>div>h3]:font-[PlayFairDisplay]

                    ">
                        <div class="quicks">
                            <h3>Quick Links</h3>
                            <div class="
                                menu-links py-3.5 md:py-6
                                [&>a]:cursor-pointer [&>a]:text-(--white) [&>a]:block [&>a]:decoration-none [&>a]:text-sm [&>a]:leading-7
                            ">
                                <a href="#">Services</a>
                                <a href="#">Portfolio</a>
                                <a href="/about.html">About us</a>
                                <a href="#">Testimonial</a>
                            </div>
                        </div>
                        <div class="resources">
                            <h3>Resources</h3>
                            <div class="
                                menu-links py-3.5 md:py-6
                                [&>a]:cursor-pointer [&>a]:text-(--white) [&>a]:block [&>a]:decoration-none [&>a]:text-sm [&>a]:leading-7
                            ">
                                <a href="#">Support</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </div>
                        <div class="social">
                            <h3>Social Media</h3>
                            <div class="
                                social-links py-6 opacity-70 
                                [&>a>img]:w-4.5 
                                [&>a]:inline-block [&>a]:bg-white/8 [&>a]:decoration-none [&>a]:px-2.5 [&>a]:py-1.75 [&>a]:cursor-pointer
                            ">
                                <a href="#">
                                    <img src="/images/facebook.svg">
                                </a>
                                <a href="#">
                                    <img src="/images/twitter.svg">
                                </a>
                                <a href="#">
                                    <img src="/images/instagram.svg">
                                </a>
                                <a href="#">
                                    <img src="/images/linkedin.svg">
                                </a>
                                <a href="#">
                                    <img src="/images/youtube.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="subscribe">
                        <h3>Subscribe</h3>
                        <form class="subscribe-form relative mt-2.5 md:mt-6">
                            <label for="mail" class="absolute w-max block md:top-4.5 md:left-5 top-3.5 left-3.25">
                                <img class="md:w-6 w-4.5" src="/images/mail.png">
                            </label>
                            <input  id ="mail" class="focus-visible:outline-none transition-all duration-200 ease-linear subscibe-mail md:h-14.75 h-11.5 pl-10 md:pl-12.5 text-(--white) bg-white/12 rounded-2xl w-full box-border placeholder:opacity-0 md:placeholder:opacity-100 placeholder:text-base placeholder:font-[Poppins] placeholder:text-white/40" name="mail" placeholder="name@domain.com"/>
                            <button type="submit" class="active:scale-90 transition-all duration-200 ease-linear cursor-pointer absolute font-[Poppins] md:top-4.25 top-2.5 right-4 md:right-4.5">Send</button>
                            <p class="mail-error text-white text-xs"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;
export default Footer;
