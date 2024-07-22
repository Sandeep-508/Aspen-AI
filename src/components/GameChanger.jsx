import { infiniteImg } from "../assets/images";
import { gameChanger } from "./content";

const GameChanger = () => {
    return (
        <section className="px-3">
            <div className="container-xl bg-skin-color-200 lg:py-[100px] md:py-[80px] py-[40px] rounded-[32px]">
                <div className="container">
                    <p className=" font-poppins font-semibold md:text-4xl text-3xl text-center"><span className="bg-[#EFEFEF] px-2 rounded-[8px]">Aspen AI:</span> Game Changers</p>
                    <div className="row mt-[26px] mb-[44px] items-center justify-center">
                        {gameChanger.map((obj, index) => (
                            <div key={index} className="lg:w-4/12 md:w-6/12 w-full px-3 flex flex-col items-center justify-center min-h-[98px] pt-6">
                                {obj.img ? (
                                    <img src={obj.img} alt={obj.secText} className="w-[83px] h-[39px] mb-[24px]" />
                                ) : (
                                    <p className="font-poppins font-semibold text-5xl text-dark-green">{obj.priText}</p>
                                )}
                                <p className="font-poppins font-normal text-base text-black-200">{obj.secText}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <button className='BtnProp w-[190px]'>Request A Demo</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameChanger;
