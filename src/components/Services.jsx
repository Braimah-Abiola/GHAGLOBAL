import { serviceOne, serviceThree, serviceTwo } from "../assets"

const Services = () => {
    return (
        <div className="flex flex-col w-full pt-40 pb-20">
            <div className="flex flex-col mx-auto max-w-[1650px] w-full space-y-32">

                <div className="flex flex-row justify-between w-full ">
                    <div className="w-1/3">
                        <h3 className="services_title">Applied Project Management</h3>
                        <p className="services_description mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                    <div className="w-[45%]">
                        <img src={serviceOne} alt="Applied project management" />
                    </div>
                </div>

                <div className="flex flex-row justify-between w-full ">
                    <div className="w-[45%]">
                        <img src={serviceTwo} alt="Applied project management" />
                    </div>
                    <div className="w-1/2 px-20">
                        <h3 className="services_title">Program Integration Techniques</h3>
                        <p className="services_description mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between w-full ">
                    <div className="w-1/3">
                        <h3 className="services_title">Strategic Planning</h3>
                        <p className="services_description mt-5">Program integration is defined here as the process of achieving unity of effort between the projects of a program and ensuring alignment between the program and the needs of the parent organization</p>
                    </div>
                    <div className="w-[45%]">
                        <img src={serviceThree} alt="Applied project management" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services