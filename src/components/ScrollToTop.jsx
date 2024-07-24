import { useState, useEffect } from "react";
import { ScrollToArrow } from "./icon";

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(false);
    const scrollPt = 200;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollPt) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed md:right-6 md:bottom-6 right-3 bottom-3 z-[11] ${scrollTop ? 'block' : 'hidden'} scrollTopProp`} onClick={handleScrollTop}>
            <div className="rotate-180 border flex items-center justify-center border-white bg-dark-green md:w-[50px] md:h-[50px] w-[30px] h-[30px] rounded-full cursor-pointer group hover:bg-white hover:border-dark-green hover:border hover:shadow-scrollBoxShadow transition-all">
                <ScrollToArrow className="max-md:w-[20px] max-md:h-[20px]" />
            </div>
        </div>
    );
};

export default ScrollToTop;
