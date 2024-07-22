import { capabilities } from "./content"

const Capabilities = () => {
    return (
        <section id="learn">
            <div className="container max-md:max-w-[576px] lg:pt-[195px] md:pt-[150px] pt-[90px]">
                <p className="font-poppins text-center sm:text-4xl text-3xl font-semibold text-black-300 pb-4">Capabilities</p>
                <div className="flex items-center justify-center">
                    <p className="pb-5 font-lato font-normal text-base text-black-300 text-center max-w-[523px] opacity-70">Aspen AI takes calls, makes calls, texts, and has meaningful conversations with all your prospective and current clients.</p>
                </div>
                <div className="-mx-3 flex flex-wrap flex-row">
                    {
                        capabilities.map((obj, index) => <div className=" px-2 lg:w-4/12 md:w-6/12 flex sm:items-start sm:justify-start items-center justify-center flex-col lg:pt-[44px] pt-6">
                            <div className="md:w-[72px] md:h-[72px] w-[50px] h-[50px] rounded-full border border-[#023E481F] flex items-center justify-center">
                                <img src={obj.img} alt="images of diff capabilities of the comapny" className="md:w-[36px] md:h-[36px] w-[25px] h-[25px]" />
                            </div>
                            <p className="font-poppins font-semibold text-2xl text-dark-green lg:pt-8 md:pt-6 pt-4 pb-[14px] sm:text-start text-center">{obj.priTxt}</p>
                            <p className="font-lato font-normal text-base text-black-200 opacity-70 sm:text-start text-center">{obj.secTxt}</p>
                        </div>)
                    }
                </div>
                <div className=" flex items-center gap-6 justify-center lg:pt-[64px] md:pt-[44px] pt-8 flex-wrap">
                    <button className='BtnProp bg-dark-green text-white w-[210px]'>Demo Texting Now</button>
                    <button className='BtnProp w-[182px]'>Demo Call Now</button>
                </div>
            </div>
        </section>
    )
}

export default Capabilities