import { callHandling } from "./content"

const CallHandling = () => {
    return (
        <section className="sm:px-6 px-5">
            <div className="container-xl max-sm:px-3 bg-skin-color md:py-[100px] sm:py-[80px] py-[50px] rounded-[32px]">
                <div className="container max-sm:px-0">
                    <div className="flex items-center justify-center">
                        <p className="max-w-[854px] text-center font-semibold font-poppins lg:text-4xl text-3xl text-black-300 md:pb-[26px] pb-2">Listen to how <span className="bg-[#EFEFEF] px-2 rounded-[8px]">humanlike</span> call handling works - the Aspen AI way</p>
                    </div>
                    <div className="row items-center justify-center">
                        {callHandling.map((obj, index) => <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 max-md:flex max-md:items-center max-md:justify-center">
                            <div className="sm:max-w-[267px] w-full min-h-[60px] bg-white border border-[#0000001F] rounded-[16px] flex items-center justify-start gap-[10px] ps-[10px] md:mt-6 mt-4 hover:bg-dark-green group ease-in-out duration-300">
                                <div className="w-[40px] h-[40px] border border-transparent group-hover:border-white-200 rounded-full">
                                    <img src={obj.img} alt="call handling images" className=" w-full h-full" />
                                </div>
                                <p className="font-lato font-normal text-base text-black-300 group-hover:text-white">{obj.text}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallHandling