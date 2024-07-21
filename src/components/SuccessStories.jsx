import { stories } from "./content"

const SuccessStories = () => {
    return (
        <section className="py-[140px]">
            <div className="container">
                <p className="container text-center pb-6 font-lato sm:text-4xl text-3xl text-black-300 font-semibold">Success stories</p>
                <div className="row items-center justify-center">
                    {stories.map((obj, index) => <div className="lg:w-4/12 sm:w-6/12 w-full md:px-3 px-2 pt-[26px]">
                        <div className="md:p-6 p-2 border border-white-300 rounded-lg hover:bg-skin-color-200 hover:border-white ease-in-out duration-300">
                            <div className="flex items-center justify-start gap-[18px]">
                                <div className=" w-[60px] h-[60px]">
                                    <img src={obj.img} alt="random people image" className=" w-full h-full" />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <p className=" font-lexend font-medium text-[20px] leading-[30px]">{obj.name}</p>
                                    <p className=" font-lato font-normal md:text-base text-xs text-black-300">{obj.occup}</p>
                                </div>
                            </div>
                            <p className="pt-4 font-lato font-normal text-base text-black-300">{obj.about}</p></div>
                    </div>)}
                </div>
                <div className="flex items-center justify-center pt-[44px]">
                    <button className='BtnProp w-[122px]'>View All</button>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories