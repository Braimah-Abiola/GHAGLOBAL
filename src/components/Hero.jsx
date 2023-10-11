import { heroImage } from "../assets"

const Hero = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="full_width_image">
                <img src={heroImage} alt="GHA Global Office" />
            </div>

            <div className='flex flex-col md:flex-row md:mt-24 pt-6 md:pt-20 pb-16 md:pb-20 px-6 md:px-20 md:justify-between md:items-center'>

                <div className='flex flex-col mt-20 md:mt-10 md:ml-40 md:mr-auto'>
                    <div>
                        <h1 className="hero_text_white">
                            We provide consulting<br /> services for global<br /> strategy
                        </h1>
                        <p className="hero_description_white mt-4">
                            Unlock the potential of your business on a global scale with our comprehensive<br /> consulting services, meticulously designed for strategic excellence.
                        </p>

                        <button className="bg-primary px-12 py-4 text-white rounded-lg mt-10">Discover Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero