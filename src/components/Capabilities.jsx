import { capabilities } from "./content"

const Capabilities = () => {
    return (
        <section>
            <div className="container max-md:max-w-[576px] pt-[195px]">
                <p className="font-poppins text-center text-4xl font-semibold text-black-300 pb-4">Capabilities</p>
                <div className="flex items-center justify-center">
                    <p className="pb-5 font-lato font-normal text-base text-black-300 text-center max-w-[523px]">Aspen AI takes calls, makes calls, texts, and has meaningful conversations with all your prospective and current clients.</p>
                </div>
                <div className="-mx-3 flex flex-wrap flex-row">
                    {
                        capabilities.map((obj, index) => <div className=" px-2 lg:w-4/12 md:w-6/12 flex items-start justify-start flex-col pt-[44px]">
                            <div className="w-[72px] h-[72px] rounded-full border border-[#023E481F] flex items-center justify-center">
                                <img src={obj.img} alt="images of diff capabilities of the comapny" className="w-[36px] h-[36px]" />
                            </div>
                            <p className="font-poppins font-semibold text-2xl text-dark-green pt-8 pb-[14px]">{obj.priTxt}</p>
                            <p className="font-lato font-normal text-base text-black-200 opacity-70">{obj.secTxt}</p>
                        </div>)
                    }
                </div>
                <div className=" flex items-center gap-6 justify-center pt-[64px] flex-wrap">
                    <button className='BtnProp bg-dark-green text-white w-[210px]'>Demo Texting Now</button>
                    <button className='BtnProp w-[182px]'>Demo Call Now</button>
                </div>
            </div>
        </section>
    )
}

export default Capabilities