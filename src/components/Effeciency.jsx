import { effeciencySecImg } from "../assets/images"

const Effeciency = () => {
    return (
        <section className="lg:py-[140px] pt-[90px]" id="aspen">
            <div className="container">
                <div className="row lg:justify-between justify-center items-center">
                    <div className=" lg:w-6/12 px-3 flex items-center justify-center">
                        <img src={effeciencySecImg} alt="AI logo" className=" w-[507px] md:h-[496px] h-auto" />
                    </div>
                    <div className="lg:w-5/12 sm:w-10/12 px-3 flex flex-col sm:items-start sm:justify-start justify-center items-center lg:pt-0 pt-6">
                        <p className=" font-poppins font-semibold md:text-4xl text-3xl sm:text-start text-center"><span className="bg-[#EFEFEF] px-2 rounded-[8px]">Efficiency</span> and scalability like never before</p>
                        <p className="font-lato font-normal text-base text-black-300 opacity-70 py-4 sm:text-start text-center">Imagine a paralegal, intake agent, or staff member who is always accurate and always perfectly aligned with your objectives. That's what Aspen AI brings to your team.
                        </p>
                        <p className="font-lato font-normal text-base text-black-300 opacity-70 md:pb-[44px] pb-6 sm:text-start text-center">Our intuitive user interface and tight CRM integrations allow you to quickly craft and update messaging flows at the click of a button - giving you full control over your case screening processes and client communications.</p>
                        <button className='BtnProp bg-dark-green text-white w-[149px]'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Effeciency