import { facebook, footerBottomText, footerLogo, instagram, linkedin, twitter } from "../assets/images"

const Footer = () => {
  return (
    <div className="bg-obsidian pt-14">
      <div className="container max-sm:px-5">
        <div className="row justify-between">
          <div className="md:w-4/12 px-3 sm:w-8/12 w-full">
            <div className="md:w-[179px] md:h-[58px] w-[150px] h-[50px]">
              <a href="#">
                <img src={footerLogo} alt="footer logo" className=" w-full h-full" />
              </a>
            </div>
            <p className="font-lato font-normal text-base text-white md:max-w-[342px] pt-2.5 md:pb-8 pb-4 opacity-70">Aspen AI is a leading AI-powered platform designed to transform way businesses handle lead screening & customer interactions. </p>
            <div className="flex items-center justify-start gap-[11px]">
              <div className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] border border-white rounded-full flex items-center justify-center group ease-in-out duration-300 hover:bg-dark-green hover:border-dark-green">
                <a href="https://x.com/login=" target="_blank" className=" group-hover:scale-[1.2] ease-in-out duration-300">
                  <img src={twitter} alt="social media" className=" md:w-[18px] w-[12px] md:h-[18px] h-[12px]" />
                </a>
              </div>
              <div className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] border border-white rounded-full flex items-center justify-center group ease-in-out duration-300 hover:bg-dark-green hover:border-dark-green">
                <a href="https://www.facebook.com/login.php/" target="_blank" className=" group-hover:scale-[1.2] ease-in-out duration-300">
                  <img src={facebook} alt="social media" className=" md:w-[11px] w-[8px] md:h-[23px] h-[18px]" />
                </a>
              </div>
              <div className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] border border-white rounded-full flex items-center justify-center group ease-in-out duration-300 hover:bg-dark-green hover:border-dark-green">
                <a href="https://www.instagram.com/" target="_blank" className=" group-hover:scale-[1.2] ease-in-out duration-300">
                  <img src={instagram} alt="social media" className=" md:w-[21px] w-[15px] md:h-[20px] h-[15px]" />
                </a>
              </div>
              <div className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] border border-white rounded-full flex items-center justify-center group ease-in-out duration-300 hover:bg-dark-green hover:border-dark-green">
                <a href="https://www.linkedin.com/feed/" target="_blank" className=" group-hover:scale-[1.2] ease-in-out duration-300">
                  <img src={linkedin} alt="social media" className=" md:w-[18px] w-[12px] md:h-[18px] h-[12px]" />
                </a>
              </div>
            </div>
            <p className="font-lato font-medium sm:text-lg text-base text-off-white opacity-70 md:pt-[41px] pt-4">AI voices powered</p>
            <div className="md:w-[248px] md:h-[40px] w-[180px] h-[30px] pt-[9px]">
              <img src={footerBottomText} alt="footer bottom text" className=" w-full h-full" />
            </div>
          </div>
          <div className="md:w-5/12 px-3 w-full md:pt-0 pt-10">
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
      <div className="w-full h-[1px] bg-[#FFFFFF4D] mt-7 mb-6"></div>
      <div className="container">
        <p className="font-lato font-normal text-base text-off-white opacity-70 text-center pb-6">©2024 Aspen AI. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer