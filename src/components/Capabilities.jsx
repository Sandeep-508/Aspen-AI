import { capabilities } from "./content"

const Capabilities = () => {
    return (
        <div id="learn">
            <div className="container max-md:max-w-[576px] 2xl:pt-48 md:pt-28 pt-16">
                <p className="font-poppins text-center sm:text-4xl text-3xl font-semibold text-obsidian pb-4">Capabilities</p>
                <div className="flex items-center justify-center">
                    <p className="pb-5 font-lato font-normal text-base text-obsidian text-center max-w-[523px] opacity-70">Aspen AI takes calls, makes calls, texts, and has meaningful conversations with all your prospective and current clients.</p>
                </div>
                <div className="-mx-3 flex flex-wrap flex-row">
                    {
                        capabilities.map((obj, index) => <div className=" px-2 lg:w-4/12 md:w-6/12 flex sm:items-start sm:justify-start items-center justify-center flex-col lg:pt-11 pt-6">
                            <div className="md:w-[72px] md:h-[72px] w-[50px] h-[50px] rounded-full border border-Evening Sea flex items-center justify-center">
                                <img src={obj.img} alt="images of diff capabilities of the company" className={obj.className} />
                            </div>
                            <p className="font-poppins font-semibold text-2xl text-dark-green lg:pt-8 md:pt-6 pt-4 pb-[14px] sm:text-start text-center">{obj.priTxt}</p>
                            <p className="font-lato font-normal text-base text-black-200 opacity-70 sm:text-start text-center">{obj.secTxt}</p>
                        </div>)
                    }
                </div>
                <div className=" flex items-center gap-6 justify-center lg:pt-16 md:pt-11 pt-8 flex-wrap">
                    <button className='BtnProp bg-dark-green text-white w-[210px] hover:shadow-btnShadow hover:bg-white hover:text-dark-green'>Demo Texting Now</button>
                    <button className='BtnProp w-[182px]'>Demo Call Now</button>
                </div>
            </div>
        </div>
    )
}

export default Capabilities