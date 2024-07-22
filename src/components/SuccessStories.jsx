import { stories } from "./content"

const SuccessStories = () => {
    return (
        <section className="lg:pt-[140px] md:pt-[100px] pt-[90px]">
            <div className="container">
                <p className="container text-center md:pb-6 pb-4 font-lato sm:text-4xl text-3xl text-black-300 font-semibold">Success stories</p>
                <div className="row items-center justify-center">
                    {stories.map((obj, index) => <div className="lg:w-4/12 sm:w-6/12 w-full md:px-3 px-2 pt-[26px]">
                        <div className="md:p-6 p-4 border border-white-300 rounded-lg hover:bg-skin-color-200 hover:border-white ease-in-out duration-300">
                            <div className="flex items-center justify-start gap-[18px]">
                                <div className=" w-[60px] h-[60px]">
                                    <img src={obj.img} alt="random people image" className=" w-full h-full" />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <p className=" font-lexend font-medium text-[20px] leading-[30px]">{obj.name}</p>
                                    <p className=" font-lato font-normal md:text-base text-xs text-black-300">{obj.occup}</p>
                                </div>
                            </div>
                            <p className="pt-4 font-lato font-normal text-base text-black-300 opacity-70">{obj.about}</p></div>
                    </div>)}
                </div>
                <div className="flex items-center justify-center md:pt-[44px] pt-6">
                    <button className='BtnProp w-[122px]'>View All</button>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories