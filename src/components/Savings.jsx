import { compliantSecImg } from "../assets/images"

const Savings = () => {
    return (
        <div className="lg:px-6 px-5 lg:pb-36 md:pb-24 pb-16">
            <div className="container-xl max-sm:px-3 lg:py-24 md:py-20 py-16 rounded-[32px] mt-[140px] md:bg-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${compliantSecImg})` }}>
                <div className="flex items-center justify-center">
                    <p className="font-poppins sm:text-4xl text-3xl font-semibold text-white text-center max-w-[694px]">Calculate your  <br /> <span className="text-dark-green bg-white px-2 rounded-[8px] text-center">cost savings</span> instantly</p>
                </div>
                <div className="flex items-center justify-center w-full md:mt-[50px] mt-6 md:mb-[44px] mb-6">
                    <div className="max-w-[726px] flex flex-col items-center justify-center w-full bg-dark-green">
                        <div className="border-t border-l border-mist bg-deep-ocean py-[10px] sm:px-5 px-4 rounded-[16px] flex items-center justify-between w-full flex-wrap gap-3">
                            <p className=" font-lato sm:text-[20px] sm:leading-[30px] text-base text-cloud-gray">How many Intake Agents do you have?</p>
                            <button className="w-[140px] h-[40px] border-b border-gossamer rounded-[10px] font-lato font-normal text-sm text-cloud-gray bg-lagoon hover:bg-off-white hover:text-dark-green hover:border-dark-green">Add Info here</button>
                        </div>
                        <div className="border-t border-l border-mist bg-deep-ocean py-[10px] sm:px-5 px-4 rounded-[16px] flex items-center justify-between w-full flex-wrap gap-3 mt-5">
                            <p className=" font-lato sm:text-[20px] sm:leading-[30px] text-base text-cloud-gray">What is their average hourly rate?</p>
                            <button className="w-[140px] h-[40px] border-b border-gossamer rounded-[10px] font-lato font-normal text-sm text-cloud-gray bg-lagoon hover:bg-off-white hover:text-dark-green hover:border-dark-green">Add Info here</button>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                    <button className='BtnProp w-[149px] bg-white hover:shadow-lg hover:border-white'>Calculate</button>
                </div>
            </div>
        </div>
    )
}

export default Savings