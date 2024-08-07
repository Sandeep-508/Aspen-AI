import { useState } from "react"
import { caution, contactUs } from "../assets/images"

const ContactUs = () => {
    const [formValidation, setFormValidation] = useState({
        userName: '',
        email: '',
        phoneNumber: '',
        website: '',
        companyName: '',
        companySize: '',
    });
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation.userName !== "" && formValidation.email !== "" && formValidation.phoneNumber !== "" && formValidation.website !== "") {
            setError(false)
        } else {
            setError(true)
        }
    }
    return (
        <div className="lg:pb-36 md:pb-24 pb-16 lg:px-6 px-5" id="contact">
            <div className="container-xl px-0 xl:bg-full bg-cover bg-center bg-no-repeat lg:py-24 md:py-20 py-12 rounded-[32px]" style={{ backgroundImage: `url(${contactUs})` }}>
                <div className="max-w-[752px] mx-auto px-4">
                    <p className="font-poppins sm:text-4xl text-3xl font-semibold text-white text-center md:pb-12 pb-7"><span className="text-dark-green bg-white px-2 rounded-[8px] text-center">Contact us</span> today to <br className="md:block hidden" /> get started</p>
                    <form className="md:gap-6 gap-8 flex flex-col">
                        <div className="flex items-center gap-6 w-full max-md:flex-wrap">
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Full name*</p>
                                <input type="text" className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none" placeholder="John Domsan" onChange={(e) => setFormValidation({
                                    ...formValidation,
                                    userName: e.target.value
                                })} />
                                {error && formValidation.userName === '' && <p className="absolute text-red-700 font-lato text-base font-normal -bottom-6 ">Name is Required !</p>}
                            </div>
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Phone Number*</p>
                                <input type="number" className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none" placeholder="+000 1234 000" inputMode="numeric" pattern="[0-9]*" onChange={(e) => setFormValidation({
                                    ...formValidation,
                                    phoneNumber: e.target.value
                                })} />
                                {error && formValidation.phoneNumber === '' && <p className="text-red-700 font-lato text-base font-normal -bottom-6 absolute ">Phone Number is Required !</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-6 w-full max-md:flex-wrap">
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Email address*</p>
                                <input type="email" className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none" placeholder="John123@gmail.com" onChange={(e) => setFormValidation({
                                    ...formValidation,
                                    email: e.target.value
                                })} />
                                {error && formValidation.email === '' && <p className="text-red-700 font-lato text-base font-normal -bottom-6 absolute ">Email is Required !</p>}
                            </div>
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Website</p>
                                <input type="text" className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none" placeholder="xyz.ltd.com" inputMode="numeric" pattern="[0-9]*" onChange={(e) => setFormValidation({
                                    ...formValidation,
                                    website: e.target.value
                                })} />
                                {error && formValidation.website === '' && <p className="text-red-700 font-lato text-base font-normal -bottom-6 absolute ">Name is Required !</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-6 w-full max-md:flex-wrap">
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Company Name*</p>
                                <input type="email" className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none" placeholder="xyz.ltd" onChange={(e) => setFormValidation({
                                    ...formValidation,
                                    companyName: e.target.value
                                })} />
                                {error && formValidation.companyName === '' && <p className="text-red-700 font-lato text-base font-normal -bottom-6 absolute ">Email is Required !</p>}
                            </div>
                            <div className="flex items-start justify-center flex-col gap-2 w-full relative">
                                <p className="font-lato font-normal text-base text-off-white opacity-60">Company size</p>
                                <select
                                    className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[100px] font-lato font-normal text-base text-white outline-none appearance-none"
                                    onChange={(e) => setFormValidation({
                                        ...formValidation,
                                        companySize: e.target.value
                                    })}
                                    value={formValidation.companySize}
                                >
                                    <option value="" className="text-off-white bg-dark-green">Select company size</option>
                                    <option value="1-50x" className="text-off-white bg-dark-green">1-50</option>
                                    <option value="51-1000" className="text-off-white bg-dark-green">51-1000</option>
                                    <option value="1001+" className="text-off-white bg-dark-green">1001+</option>
                                </select>
                                {error && formValidation.companySize === '' && <p className="text-red-700 font-lato text-base font-normal -bottom-6 absolute ">Company size is Required!</p>}
                            </div>
                        </div>
                        <div className="flex items-start justify-center flex-col gap-2 w-full">
                            <p className="font-lato font-normal text-base text-off-white opacity-60">Message</p>
                            <textarea className="py-[13px] ps-4 w-full bg-frost border border-mist rounded-[24px] resize-none font-lato h-[128px] font-normal outline-none text-base text-white "></textarea>
                        </div>
                        <div className="flex gap-1.5 items-start justify-center">
                            <div className=" max-w-[20px] h-[20px] w-full">
                                <img src={caution} alt="caution message" className=" w-full h-full" />
                            </div>
                            <p className="font-lato text-xs text-off-white opacity-70">Yes! Please have a staff member from Aspen AI contact me as soon as possible to discuss my questions. They may contact me by email or telephone (including phone calls, text messages, autodialed / auto-selected or pre-recorded calls). I understand that message and data rates may apply and that consent to such contact is not required for use of these services. I also agree to the Privacy Policy and online Terms, including its mandatory arbitration provision.</p>
                        </div>
                        <button className=" w-full min-h-[55px] text-dark-green bg-off-white rounded-[99px] font-lato font-bold text-lg mt-5 border border-transparent hover:bg-dark-green hover:text-white ease-in-out duration-300 hover:shadow-xl hover:border hover:border-off-white" onClick={(e) => handleSubmit(e)}>Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
