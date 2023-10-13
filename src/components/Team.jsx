import { carlos, ceo, president, profile } from "../assets"

const Team = () => {
    return (
        <div className="flex flex-col max-w-[1440px] mx-auto w-full items-center mt-[5rem] md:mt-[10rem]">
            <h2 className="services_title">The Team</h2>
            <div className="flex flex-col md:flex-row justify-between w-full space-x-0 md:space-x-8 space-y-5 md:space-y-0 mt-12 px-5 md:px-0">
                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-8 md:p-10">
                    <img className="w-28 h-28" src={president} alt="President" />
                    <p className="mt-6 services_description">President</p>
                    <h4 className="font-schibsted font-medium text-[20px] md:text-[24px]">HRH Sabrina Poole</h4>
                    <p className="text-center mt-3 md:mt-5 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-8 md:p-10">
                    <img className="w-28 h-28" src={profile} alt="" />
                    <p className="mt-6 services_description">Director</p>
                    <h4 className="font-schibsted font-medium text-[20px] md:text-[24px]">Lawson Abdullai Yakubu</h4>
                    <p className="text-center mt-3 md:mt-5 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-8 md:p-10">
                    <img className="w-28 h-28" src={carlos} alt="Carlos Boakye" />
                    <p className="mt-6 services_description">Board Secretary</p>
                    <h4 className="font-schibsted font-medium text-[20px] md:text-[24px]">Carlos Boakye</h4>
                    <p className="text-center mt-3 md:mt-5 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full md:justify-center space-x-0 md:space-x-8 space-y-5 md:space-y-0 mt-5 md:mt-8 px-5 md:px-0">
                <div className="bg-[#F3F3F3] md:w-[460px] flex flex-col rounded-[20px] items-center justify-center p-8 md:p-10">
                    <img className="w-28 h-28" src={ceo} alt="CEO" />
                    <p className="mt-6 services_description">CEO</p>
                    <h4 className="font-schibsted font-medium text-[20px] md:text-[24px]">Samuel Lawson</h4>
                    <p className="text-center mt-3 md:mt-5 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

                <div className="bg-[#F3F3F3] md:w-[460px] flex flex-col rounded-[20px] items-center justify-center p-8 md:p-10">
                    <img className="w-28 h-28" src={profile} alt="" />
                    <p className="mt-6 services_description">Executive Assistant</p>
                    <h4 className="font-schibsted text-center font-medium text-[20px] md:text-[24px]">Nathaniel Kweku Mawuena Anku</h4>
                    <p className="text-center mt-3 md:mt-5 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

            </div>
        </div>
    )
}

export default Team