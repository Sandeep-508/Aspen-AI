import { infiniteImg } from "../assets/images";
import { gameChanger } from "./content";

const GameChanger = () => {
    return (
        <div className="sm:px-6 px-5" id="pricing">
            <div className="container-xl max-sm:px-0 bg-pearl lg:py-24 md:py-20 py-16 rounded-[32px]">
                <div className="container">
                    <p className=" font-poppins font-semibold md:text-4xl text-3xl text-center"><span className="bg-whisper px-2 rounded-[8px]">Aspen AI:</span> Game Changers</p>
                    <div className="row mt-7 mb-11 items-center justify-center">
                        {gameChanger.map((obj, index) => (
                            <div key={index} className="md:w-4/12 sm:w-6/12 w-full px-3 flex flex-col items-center justify-center min-h-[98px] pt-6">
                                {obj.img ? (
                                    <img src={obj.img} alt={obj.secText} className="w-[83px] h-[39px] mb-6" />
                                ) : (
                                    <p className="font-poppins font-semibold md:text-5xl text-3xl text-dark-green">{obj.priText}</p>
                                )}
                                <p className="font-poppins font-normal text-base text-charcoal">{obj.secText}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <button className='BtnProp w-[190px]'>Request A Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameChanger;
