import { profile } from "../assets"

const Team = () => {
    return (
        <div className="flex flex-col max-w-[1440px] mx-auto w-full items-center md:mt-[10rem]">
            <h2 className="services_title">The Team</h2>
            <div className="flex flex-row justify-between w-full space-x-8 mt-12">
                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-10">
                    <img className="w-28 h-28" src={profile} alt="" />
                    <p className="mt-6">CEO</p>
                    <h4>HRH Sabrina Poole</h4>
                    <p className="text-center mt-10 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-10">
                    <img className="w-28 h-28" src={profile} alt="" />
                    <p className="mt-6">CEO</p>
                    <h4>HRH Sabrina Poole</h4>
                    <p className="text-center mt-10 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>

                <div className="bg-[#F3F3F3] flex flex-col rounded-[20px] items-center justify-center p-10">
                    <img className="w-28 h-28" src={profile} alt="" />
                    <p className="mt-6">CEO</p>
                    <h4>HRH Sabrina Poole</h4>
                    <p className="text-center mt-10 services_description">HRH Sabrina Poole is the Chief Executive Officer (CEO) of GHA GLOBAL, driven by his passion for global strategy. She is responsible for managing the organization&apos;s activities and programs, identifying new opportunities and ensuring that clients have a positive and fulfilling experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Team