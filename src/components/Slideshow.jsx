import Marquee from "react-fast-marquee"
import { marqueeFour, marqueeOne, marqueeThree, marqueeTwo } from "../assets"

const Slideshow = () => {
    return (
        <div className="flex flex-col w-full mt-[8rem] md:mt-[15rem]">
            <Marquee>
                <img className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] mr-10" src={marqueeOne} alt="Life at GHA Global" />
                <img className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] mr-10" src={marqueeTwo} alt="Life at GHA Global" />
                <img className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] mr-10" src={marqueeThree} alt="Life at GHA Global" />
                <img className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] mr-10" src={marqueeFour} alt="Life at GHA Global" />
            </Marquee>
        </div>
    )
}

export default Slideshow