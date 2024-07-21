import { callHandling } from "./content"

const CallHandling = () => {
    return (
        <section>
            <div className="container-xl bg-skin-color py-[100px] rounded-[32px]">
                <div className="container">
                    <div className="flex items-center justify-center">
                        <p className="max-w-[854px] text-center font-semibold font-poppins lg:text-4xl text-3xl text-black-300 pb-[50px]">Listen to how <span className="bg-[#EFEFEF] px-2 rounded-[8px]">humanlike</span> call handling works - the Aspen AI way</p>
                    </div>
                    <div className="row items-center justify-center">
                        {callHandling.map((obj, index) => <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 max-sm:flex max-sm:items-center max-sm:justify-center">
                            <div className="sm:max-w-[267px] w-full min-h-[60px] border border-[#0000001F] rounded-[16px] flex items-center justify-start gap-[10px] ps-[10px] mt-6">
                                <div className="w-[40px] h-[40px]">
                                    <img src={obj.img} alt="call handling images" className=" w-full h-full" />
                                </div>
                                <p className="font-lato font-normal text-base text-black-300">{obj.text}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallHandling