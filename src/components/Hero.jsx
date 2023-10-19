import { heroImage } from "../assets"
import Companies from "./Companies"

const Hero = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="full_width_image">
                <img src={heroImage} alt="GHA Global Office" />
            </div>

            <div className='flex flex-col md:flex-row md:mt-24 pt-6 md:pt-20 pb-16 md:pb-20 px-5 md:px-20 md:justify-between md:items-center'>

                <div className='flex flex-col mt-20 md:mt-10 md:ml-40 md:mr-auto'>
                    <div>
                        <h1 className="hero_text_white">
                            We provide consulting<br className="hidden md:block" /> services for global<br className="hidden md:block" /> strategy
                        </h1>
                        <p className="hero_description_white mt-4">
                            Unlock the potential of your business on a global scale with our comprehensive<br className="hidden md:block" /> consulting services, meticulously designed for strategic excellence.
                        </p>

                        <a href="#services">
                            <button className="bg-primary hover:bg-[#5E41D1] px-8 md:px-12 py-4 text-white rounded-lg mt-10">Discover Now</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-[5rem] md:hidden bg-white">
                <Companies />
            </div>

        </div>
    )
}

export default Hero