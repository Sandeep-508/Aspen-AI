import { whyChooseUSImg } from "../assets/images"

const WhyChooseUs = () => {
    return (
        <div className="lg:py-36 md:py-24 py-16" id="about">
            <div className="container max-sm:px-5 max-lg:max-w-[768px]">
                <div className="row justify-between items-center lg:flex-row flex-col-reverse">
                    <div className="lg:w-6/12 sm:w-10/12 px-3 flex sm:items-start items-center justify-center flex-col lg:pt-0 pt-6">
                        <p className=" font-poppins font-semibold md:text-4xl text-3xl sm:text-start text-center">Why <span className="bg-whisper px-2 rounded-[8px]">Aspen AI</span> works</p>
                        <p className="font-lato font-normal text-base text-obsidian opacity-70 py-4 sm:text-start text-center">Aspen AI is a battle-tested business platform and end-to-end solution that grew out of one personal injury and mass tort law firm's need to handle more than a half-million intake and client calls each year.
                        </p>
                        <p className="font-lato font-normal text-base text-obsidian opacity-70 md:pb-11 pb-6 sm:text-start text-center">Every call is different, most are highly complex, and all need the human touch.</p>
                        <button className='BtnProp bg-dark-green text-white w-[149px] hover:shadow-btnShadow hover:bg-white hover:text-dark-green'>Get Started</button>
                    </div>
                    <div className="lg:w-6/12 px-3 flex items-center justify-center">
                        <img src={whyChooseUSImg} alt="why choose section image" className="lg:w-[507px] w-full lg:h-[496px] sm:h-[400px] h-[300px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs