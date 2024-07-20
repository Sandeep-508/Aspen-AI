import React from 'react'
import { ApsenLogo } from '../assets/images'
import { Link } from 'react-router-dom'

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
            <nav className='container'>
                <div className='w-[179px] h-[58px]'>
                    <a href="#">
                        <img src={ApsenLogo} className=' w-full h-full' alt="header logo" />
                    </a>
                </div>
                <div className=' flex items-center justify-center'>
                    {navLink.map((obj, index) => <a href={obj.route} className=' font-normal font-lato text-base text-black-300 hover:stroke-black-300'>{obj.tabText}</a>)}
                </div>
            </nav>
        </header >
    )
}

export default Header