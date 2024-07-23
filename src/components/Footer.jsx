import { facebook, footerBottomText, footerLogo, instagram, linkedin, twitter } from "../assets/images"

const Footer = () => {
  return (
    <section className="bg-black-300 pt-[60px]">
      <div className="container">
        <div className="row justify-between">
          <div className="md:w-4/12 sm:w-8/12 w-full">
            <div className="w-[179px] h-[58px]">
              <img src={footerLogo} alt="footer logo" className=" w-full h-full" />
            </div>
            <p className="font-lato font-normal text-base text-white md:max-w-[342px] pt-[10px] md:pb-8 pb-4 opacity-70">Aspen AI is a leading AI-powered platform designed to transform way businesses handle lead screening & customer interactions. </p>
            <div className="flex items-center justify-start gap-[11px]">
              <div className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center">
                <a href="https://x.com/login=" target="_blank">
                  <img src={twitter} alt="social media" className=" w-[18px] h-[18px]" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center">
                <a href="https://www.facebook.com/login.php/" target="_blank">
                  <img src={facebook} alt="social media" className=" w-[11px] h-[23px]" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={instagram} alt="social media" className=" w-[21px] h-[20px]" />
                </a>
              </div>
              <div className="w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <img src={linkedin} alt="social media" className=" w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
            <p className="font-lato font-medium text-lg text-white-200 opacity-70 md:pt-[41px] pt-4">AI voices powered</p>
            <div className="w-[248px] h-[40px] pt-[9px]">
              <img src={footerBottomText} alt="footer bottom text" className=" w-full h-full" />
            </div>
          </div>
          <div className="md:w-5/12 w-full md:pt-0 pt-10">
            <div className="row justify-between">
              <div className="sm:w-5/12 px-3 flex flex-col items-start">
                <p className="font-lato font-medium text-lg text-white">Quick Link</p>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Aspen AI</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Learn</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Listen</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300 text-nowrap">Savings Calculator</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">About Aspen AI</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">FAQs</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Contact</a>
              </div>
              <div className="sm:w-5/12 px-3 flex flex-col items-start">
                <p className="font-lato font-medium text-lg text-white">Quick Link</p>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Terms & Conditions</a>
                <a href="#" className="font-lato font-normal text-base text-white opacity-70 pt-[14px] hover:opacity-100 ease-in-out duration-300">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF4D] mt-[27px] mb-6"></div>
      <div className="container">
        <p className="font-lato font-normal text-base text-white-200 opacity-70 text-center pb-6">©2024 Aspen AI. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer