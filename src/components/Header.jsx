import React from 'react'
import { ApsenLogo } from '../assets/images'
import { Link } from 'react-router-dom'
import { heroCol } from './content'

const Header = () => {
    const navLink = [
        { "tabText": "Aspen AI", "route": "/aspen" },
        { "tabText": "Learn", "route": "/Learn" },
        { "tabText": "Listen", "route": "/Listen" },
        { "tabText": "Pricing", "route": "/Pricing" },
        { "tabText": "About", "route": "/About" },
        { "tabText": "FAQs", "route": "/FAQs" },
        { "tabText": "Contact", "route": "/Contact" },
    ]

    return (
        <header>
            <nav className='container flex items-center justify-between w-full pt-[21px]'>
                <div className='w-[179px] h-[58px]'>
                    <a href="#">
                        <img src={ApsenLogo} className=' w-full h-full' alt="header logo" />
                    </a>
                </div>
                <div className=' flex items-center justify-center gap-[30px]'>
                    {navLink.map((obj, index) => <a href={obj.route} className=' font-normal font-lato text-base text-black-300 hover:font-bold'>{obj.tabText}</a>)}
                    <div className='flex items-center justify-center gap-[14px]'>
                        <button className='BtnProp'>Log In</button>
                        <button className='BtnProp bg-dark-green text-white w-[149px]'>Get Started</button>
                    </div>
                </div>
            </nav>
            <section className='pt-[100px]'>
                <div className='max-w-[987px] flex items-center flex-col mx-auto'>
                    <p className='font-poppins font-semibold text-6xl text-center text-black-300'>Humanlike AI for legal intake and
                        client communications </p>
                    <p className='font-poppins font-semibold text-3xl text-black-300 pt-4 pb-[40px]'>Lets your people focus on high value opportunities</p>
                    <button className='BtnProp bg-dark-green text-white w-[190px]'>Request A Demo</button>
                </div>
                <div className='container pt-[80px]'>
                    <div className='flex flex-row flex-wrap -mx-3 justify-between'>
                        {heroCol.map((obj, index) => {
                            let width = "w-[232px]";
                            let textWidth = "w-[159px]";
                            if (index === 1) {
                                width = "w-[249px]";
                                textWidth = "w-[175px]";
                            } else if (index === 2) {
                                width = "w-[306px]";
                                textWidth = "w-[232px]";
                            } else if (index === 3) {
                                width = "w-[325px]";
                                textWidth = "w-[251px]";
                            }
                            return (
                                <div key={index} className={`${width} px-3 flex items-center gap-2`}>
                                    <div className='w-[40px] h-[40px] rounded-full border border-[#D9D9D9] flex items-center justify-center'>
                                        <img src={obj.img} alt="icon" className='w-[18px] h-[18px]' />
                                    </div>
                                    <p className={`${textWidth} font-lato font-semibold text-base text-black-300`}>{obj.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </header >
    )
}

export default Header