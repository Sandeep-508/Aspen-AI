import { compliantSecImg } from "../assets/images"

const Savings = () => {
    return (
        <section className="px-3">
            <div className="container py-[100px] rounded-[32px] mt-[140px] md:bg-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${compliantSecImg})` }}>
                <div className="flex items-center justify-center">
                    <p className="font-poppins sm:text-4xl text-3xl font-semibold text-white text-center pb-4 max-w-[694px]">Calculate your  <br /> <span className="text-dark-green bg-white px-2 rounded-[8px] text-center">cost savings</span> instantly</p>
                </div>
                <div className="flex items-center justify-center w-full mt-[50px] mb-[44px]">
                    <div className="max-w-[726px] flex flex-col items-center justify-center w-full">
                        <div className="border-t border-l border-[#FEFEFE1F] py-[15px] sm:px-5 px-2 rounded-[16px] flex items-center justify-between w-full flex-wrap gap-3">
                            <p className=" font-lato sm:text-[20px] sm:leading-[30px] text-base text-[#D1DCDE]">How many Intake Agents do you have?</p>
                            <button className="w-[140px] h-[40px] border-b border-[#FFFFFF33] rounded-[10px] font-lato font-normal text-sm text-[#D1DCDE]">Add Info here</button>
                        </div>
                        <div className="border-t border-l border-[#FEFEFE1F] py-[15px] px-5 rounded-[16px] flex items-center justify-between w-full flex-wrap gap-3 mt-5">
                            <p className=" font-lato sm:text-[20px] sm:leading-[30px] text-base text-[#D1DCDE]">What is their average hourly rate?</p>
                            <button className="w-[140px] h-[40px] border-b border-[#FFFFFF33] rounded-[10px] font-lato font-normal text-sm text-[#D1DCDE]">Add Info here</button>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                    <button className='BtnProp w-[149px] bg-white hover:shadow-lg hover:border-white'>Calculate</button>
                </div>
            </div>
        </section>
    )
}

export default Savings