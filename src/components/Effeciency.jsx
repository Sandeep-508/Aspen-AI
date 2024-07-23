import { effeciencySecImg } from "../assets/images"

const Effeciency = () => {
    return (
        <div className="lg:py-36 py-16" id="aspen">
            <div className="container max-sm:px-5">
                <div className="row lg:justify-between justify-center items-center">
                    <div className=" lg:w-6/12 px-3 flex items-center justify-center">
                        <img src={effeciencySecImg} alt="AI logo" className=" md:w-[507px] w-full md:h-[496px] sm:h-[400px] h-auto" />
                    </div>
                    <div className="lg:w-5/12 sm:w-10/12 px-3 flex flex-col sm:items-start sm:justify-start justify-center items-center lg:pt-0 pt-6">
                        <p className=" font-poppins font-semibold md:text-4xl text-3xl sm:text-start text-center"><span className="bg-whisper px-2 rounded-[8px]">Efficiency</span> and scalability like never before</p>
                        <p className="font-lato font-normal text-base text-obsidian opacity-70 py-4 sm:text-start text-center">Imagine a paralegal, intake agent, or staff member who is always accurate and always perfectly aligned with your objectives. That's what Aspen AI brings to your team.
                        </p>
                        <p className="font-lato font-normal text-base text-obsidian opacity-70 md:pb-11 pb-6 sm:text-start text-center">Our intuitive user interface and tight CRM integrations allow you to quickly craft and update messaging flows at the click of a button - giving you full control over your case screening processes and client communications.</p>
                        <button className='BtnProp bg-dark-green text-white w-[149px] hover:shadow-btnShadow hover:bg-white hover:text-dark-green'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Effeciency