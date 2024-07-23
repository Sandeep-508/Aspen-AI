import { stories } from "./content"

const SuccessStories = () => {
    return (
        <div className="lg:pt-36 md:pt-24 pt-16">
            <div className="container max-sm:px-5">
                <p className="text-center md:pb-6 pb-4 font-poppins sm:text-4xl text-3xl text-obsidian font-semibold">Success stories</p>
                <div className="row items-center justify-center">
                    {stories.map((obj, index) => <div className="lg:w-4/12 sm:w-6/12 w-full md:px-3 px-2 pt-6">
                        <div className="md:p-6 p-4 border border-shadow rounded-lg hover:bg-pearl hover:border-white ease-in-out duration-300">
                            <div className="flex items-center justify-start gap-[18px]">
                                <div className=" w-[60px] h-[60px]">
                                    <img src={obj.img} alt="random people image" className=" w-full h-full" />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <p className=" font-lexend font-medium text-[20px] leading-[30px]">{obj.name}</p>
                                    <p className=" font-lato font-normal md:text-base text-xs text-obsidian">{obj.occup}</p>
                                </div>
                            </div>
                            <p className="pt-4 font-lato font-normal text-base text-obsidian opacity-70">{obj.about}</p></div>
                    </div>)}
                </div>
                <div className="flex items-center justify-center md:pt-11 pt-6">
                    <button className='BtnProp w-[122px]'>View All</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories