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
            className={`fixed right-6 bottom-6 z-[11] ${scrollTop ? 'block' : 'hidden'}`} onClick={handleScrollTop}>
            <div className="rotate-180 border border-white bg-dark-green w-[50px] h-[50px] rounded-full cursor-pointer group hover:bg-white hover:border-dark-green hover:border hover:shadow-scrollBoxShadow transition-all">
                <ScrollToArrow />
            </div>
        </div>
    );
};

export default ScrollToTop;
