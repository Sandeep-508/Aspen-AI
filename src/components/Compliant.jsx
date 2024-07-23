import { compliantSecImg } from "../assets/images"

const Compliant = () => {
    return (
        <div className="sm:px-6 px-5" id="listen">
            <div className="container-xl md:py-24 py-16 rounded-[32px] lg:mt-36 md:mt-24 mt-16 md:bg-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${compliantSecImg})` }}>
                <p className="font-poppins sm:text-4xl text-3xl font-semibold text-white text-center pb-4">TCPA <span className="text-dark-green bg-white px-2 rounded-[8px] text-center">Compliant</span></p>
                <div className=" flex items-center justify-center">
                    <p className="font-lato font-normal text-base text-center text-off-white max-w-[694px]">From our inception, we have always adhered to the most stringent standards of Telephone Consumer Protection Act (TCPA) compliance - helping you avoid common pitfalls and liabilities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Compliant