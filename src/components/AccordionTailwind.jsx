import React, { useState } from 'react';
import DownArrow from '../assets/images/DownArrow.webp';
import UpArrow from '../assets/images/upArrow.webp';

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
    return (
        <div className={`border border-gray-300 ${isOpen ? "rounded-[24px] bg-custom-teal" : "md:rounded-[100px] rounded-[16px] bg-white"} mb-[18px] max-w-[938px] mx-auto`}>
            <div
                className={`px-6 pt-4 ${isOpen ? "pb-[12px]" : "pb-4"}  cursor-pointer flex justify-between items-center text-gray`}
                onClick={toggleAccordion}
            >
                <p className='font-lato font-medium sm:text-xl text-base text-obsidian'>{title}</p>
                {isOpen ? (
                    <img src={UpArrow} alt="Up Arrow" className="w-4 h-[9px]" />
                ) : (
                    <img src={DownArrow} alt="Down Arrow" className="w-4 h-[9px]" />
                )}
            </div>
            {isOpen && (
                <div
                    className="ps-6 pb-4 lg:pe-[133px] pe-4 font-lato font-normal sm:text-base text-sm opacity-70 text-obsidian"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            )}
        </div>
    );
}

function Accordion() {
    const [accordionItems, setAccordionItems] = useState([
        {
            title: 'Is it easy to get started?',
            content: 'Absolutely. We will work directly with you to test, implement, and monitor the entire system. You can be up and running within two  weeks. You will have a dedicated account manager to ensure a seamless setup, ongoing optimizations, and your future success. You will also have a portal where you can manage everything:  scripts, bots, leads, and more.',
            isOpen: true,
        },
        {
            title: 'What systems do you integrate with?',
            content: 'Our team of engineers can set up integrations with any system.',
            isOpen: false,
        },
        {
            title: 'Will my customers be turned-off?',
            content: 'Our ongoing performance research has shown zero decline in customer satisfaction and conversion rates and, obviously, a big gain in efficiency. Callers love the naturalness, thoroughness, intellect and tone of the Aspen AI system. Our product was developed in conjunction with a team of social scientists who constantly monitor and improve the product.  Aspen AI strikes the perfect balance between professionalism and personalization on every call.',
            isOpen: false,
        },
        {
            title: 'How much does it cost?',
            content: 'Exact pricing is based on your business needs. To get a rough idea of cost savings on call handling, use our Savings Calculator. Contact us today to further discuss pricing and Aspen AI solutions.',
            isOpen: false,
        },
        {
            title: 'How is this better than a human?',
            content: `
        <p>While this is in some ways a sensitive question, Aspen AI is able to outperform many of the routine tasks that once could only be accomplished by people. Examples of Aspen AI's Performance Superiority:</p>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li>A personality that is always kind, with no bad days or bad moods.</li>
            <li>One and done training, and then it starts learning on its own.</li>
            <li>A vocabulary of 165,000 words vs. 30,000 for the average person.</li>
            <li>Can converse with anyone from anywhere - it now speaks 57 languages and counting</li>
            <li>A natural conversationalist so life-like that customers suspend their disbelief and enjoy the interaction and interplay.</li>
            <li>A consistency on every call that is impossible to achieve with multiple people fielding calls</li>
        </ul>
    `,
            isOpen: false,
        },
        {
            title: 'Our firm isnt that large.Can this be adapted to my size',
            content: 'Yes.  Aspen AI provides efficiencies to law firms and kindred businesses of every size.',
            isOpen: false,
        },
        {
            title: 'What if a client gets frustrated with the bot and wants to speak with a real person?',
            content: 'The beauty of Aspen AI is it can be customized to virtually any kind of need or preference.  There is no problem building in a live switch feature to the platform, which you would typically only make available during office hours.',
            isOpen: false,
        },
        {
            title: 'Will I be able to get technical support and troubleshooting help if needed?',
            content: 'This is available and included for all Aspen AI users',
            isOpen: false,
        },
    ]);

    const toggleAccordionItem = (index) => {
        const updatedAccordionItems = [...accordionItems];
        updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
        setAccordionItems(updatedAccordionItems);
    };

    return (
        <div className='lg:py-[140px] md:py-[100px] py-[90px] md:px-6 px-5' id='faqs'>
            <p className=" font-poppins lg:pb-[58px] md:pb-[40px] pb-6 font-semibold md:text-4xl text-3xl text-center">Frequently asked <span className="bg-whisper px-2 rounded-[8px]">questions</span></p>
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={item.isOpen}
                    toggleAccordion={() => toggleAccordionItem(index)}
                />
            ))}
        </div>
    );
}

export default Accordion;