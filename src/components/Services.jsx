import { serviceOne, serviceThree, serviceTwo } from "../assets"

const Services = () => {
    return (
        <div id="services" className="flex flex-col w-full pt-0 md:pt-40 pb-20 px-5 md:px-0">
            <div className="flex flex-col mx-auto max-w-[1440px] w-full space-y-12 md:space-y-32">

                <div className="flex flex-col md:flex-row justify-between w-full ">
                    <div className="w-full md:w-1/3">
                        <h3 className="services_title">Applied Project Management</h3>
                        <p className="services_description mt-2 md:mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                    <div className="md:w-[45%] w-full mt-8 md:mt-0">
                        <img src={serviceOne} alt="Applied project management" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full ">
                    <div className="w-[45%] hidden md:block">
                        <img src={serviceTwo} alt="Applied project management" />
                    </div>
                    <div className="w-full md:w-1/2 md:px-20">
                        <h3 className="services_title">Program Integration Techniques</h3>
                        <p className="services_description mt-2 md:mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                    <div className="w-full md:w-[45%] md:hidden mt-8 md:mt-0">
                        <img src={serviceTwo} alt="Applied project management" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full ">
                    <div className="w-full md:w-1/3">
                        <h3 className="services_title">Strategic Planning</h3>
                        <p className="services_description mt-2 md:mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                    <div className="w-full md:w-[45%] mt-8 md:mt-0">
                        <img src={serviceThree} alt="Applied project management" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services