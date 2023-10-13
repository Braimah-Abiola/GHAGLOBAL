import { icon } from "../assets"

const Mission = () => {
    return (
        <div className="flex flex-col max-w-[1440px] mx-auto w-full items-center md:mt-[5rem] px-5 md:px-0">
            <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center px-5 md:px-20 py-10">
                <img className="w-28 h-28 -mt-24" src={icon} alt="" />

                <h4 className="services_title mt-8">
                    Our Mission
                </h4>

                <p className="text-center mt-2 md:mt-4 services_description">
                    At GHA GLOBAL, our mission is to empower organizations with the tools and insights they need to navigate the complexities of the global landscape. Through our expert Consulting Services for Global Strategy, we strive to catalyze growth and success for our clients. We are dedicated to offering innovative solutions in Strategic Planning, Program Integration Techniques, and Applied Project Management. Our commitment to excellence drives us to deliver actionable strategies that enable businesses to thrive on the international stage. Together, let&apos;s shape the future of global success
                </p>

                <button className="bg-primary hover:bg-[#5E41D1] px-10 py-4 text-white rounded-lg mt-6">
                    Work with us
                </button>
            </div>
        </div>
    )
}

export default Mission