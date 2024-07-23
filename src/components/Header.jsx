import React, { useState } from 'react'
import { ApsenLogo, heroBgImg } from '../assets/images'
import { heroCol } from './content'

const Header = () => {
    const navLink = [
        { "tabText": "Aspen AI", "href": "#aspen" },
        { "tabText": "Learn", "href": "#learn" },
        { "tabText": "Listen", "href": "#listen" },
        { "tabText": "Pricing", "href": "#pricing" },
        { "tabText": "About", "href": "#about" },
        { "tabText": "FAQs", "href": "#faqs" },
        { "tabText": "Contact", "href": "#contact" },
    ]

    const [active, setActive] = useState(true);
    const handleNvaBar = () => {
        setActive(!active)
        let body = document.body;
        if (active) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
    }

    const removeNavBar = () => {
        let body = document.body;
        setActive(true)
        body.classList.remove("overflow-hidden")
    }


    return (
        <div className={`${!active ? "min-h-screen" : ""}`}>
            <nav className='container max-sm:px-5 flex items-center justify-between w-full pt-5'>
                <div className='md:w-[179px] w-[140px] md:h-[58px] h-[45px]'>
                    <a href="#">
                        <img src={ApsenLogo} className=' w-full h-full' alt="header logo" />
                    </a>
                </div>
                <div className='flex lg:hidden flex-col items-center justify-between w-[30px] h-[20px] z-10' onClick={handleNvaBar}>
                    <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "rotate-45 relative top-[8px]" : "rotate-0"}`}></span>
                    <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "hidden" : "block"}`}></span>
                    <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "-rotate-45 relative bottom-[10px]" : "rotate-0"}`}></span>
                </div>
                <div className={`flex ease-in-out duration-300 ${active ? "max-lg:left-[-100%]" : "max-lg:start-0"}  max-lg:bg-white max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 items-center justify-center xl:gap-[30px] gap-[20px]`}>
                    {navLink.map((obj, index) => <a href={obj.href} className=' font-normal font-lato text-base text-obsidian hover:textStroke transition-all ease-in-out duration-300' onClick={removeNavBar}>{obj.tabText}</a>)}
                    <div className={`flex items-center justify-center gap-[14px] ${!active ? "max-lg:flex-col" : "flex-row"}`}>
                        <button className='BtnProp'>Log In</button>
                        <button className='BtnProp bg-dark-green text-white w-[149px] hover:shadow-btnShadow hover:bg-white hover:text-dark-green'>Get Started</button>
                    </div>
                </div>
            </nav>
            <div className='lg:pt-24 pt-16'>
                <div className='container-xl max-sm:px-5 lg:bg-full bg-cover bg-bottom bg-no-repeat' style={{ backgroundImage: `url(${heroBgImg})` }}>
                    <div className='max-w-[987px] flex items-center flex-col mx-auto'>
                        <p className='font-poppins font-semibold lg:text-6xl md:text-4xl text-[30px] leading-[40px] text-center text-dark-green'>Humanlike AI for legal intake and
                            client communications </p>
                        <p className='font-poppins font-semibold sm:text-3xl text-2xl text-obsidian pt-4 md:pb-[40px] pb-5 text-center'>Lets your people focus on high value opportunities</p>
                        <button className='BtnProp bg-dark-green text-white w-[190px] hover:shadow-btnShadow hover:bg-white hover:text-dark-green'>Request A Demo</button>
                    </div>
                    <div className='container px-0 md:pt-16 pt-4'>
                        <div className='flex flex-row flex-wrap -mx-3 xl:justify-between justify-center'>
                            {heroCol.map((obj, index) => {
                                let width = "w-[232px]";
                                let textWidth = "max-w-[159px]";
                                if (index === 1) {
                                    width = "w-[249px]";
                                    textWidth = "max-w-[175px]";
                                } else if (index === 2) {
                                    width = "w-[306px]";
                                    textWidth = "max-w-[232px]";
                                } else if (index === 3) {
                                    width = "w-[325px]";
                                    textWidth = "max-w-[251px]";
                                }
                                return (
                                    <div key={index} className={`${width} px-3 flex items-center gap-2 pt-6`}>
                                        <div className='w-[40px] h-[40px] rounded-full border border-silver flex items-center justify-center'>
                                            <img src={obj.img} alt="icon" className='w-[18px] h-[18px]' />
                                        </div>
                                        <p className={`${textWidth} font-lato font-semibold text-base text-obsidian`}>{obj.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header