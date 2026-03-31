const About = `
    <section class="about">
        <div class="inner-container p-5 lg:p-7.5 xl:p-15">
            <div class="about-title text-center">
                <span class="text-var(--black) text-xl opacity-56">About us</span>
                <p class="m-0 mb-10 lg:text-4xl md:text-3xl text-2xl text-(--black) font-[PlayFairDisplay]" >Why we are the best</p>
            </div>
            <div class="about-inner flex gap-10">
                <div class="text flex-1 [&>p]:text-lg [&>p]:lg:text-xl">
                    <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet.</p>
                    <a href="/about.html" class="cursor-pointer relative block m-auto mt-6 mb-6 text-(--white) decoration-none uppercase text-base md:text-xl font-[PlayFairDisplaySC] w-max bg-(--brown) pt-1.5 pb-2.5 pr-12.5 pl-7.5 rounded-br-4xl rounded-tl-4xl">
                        Explore Product 
                        <img class="absolute top-2.5 right-6.5 md:w-5.5 w-4.5  " src="/images/arrowRight.svg">
                    </a>
                </div>
                <div class="images hidden lg:flex flex-1 gap-4">
                    <div class="mt-10">
                        <img class="w-full" src="/images/about1.png">
                    </div>
                    <div>
                        <img class="w-full" src="/images/about2.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
export default About;