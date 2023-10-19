import { serviceOne, serviceThree, serviceTwo, story } from "../assets"
import { Footer } from "../components"

const Solutions = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col w-full pt-0 md:pt-40 pb-20 px-5 md:px-0">
                <div className="flex flex-col mx-auto max-w-[1440px] w-full space-y-12 md:space-y-32">
                    <h1 className="hero_text_black mt-10 md:mt-0">
                        Project Management, <br />
                        Program Integration, <br />
                        Strategic Planning.
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between items-center space-x-0 space-y-16 md:space-y-0 md:space-x-40">
                        <div className="flex flex-col w-full">
                            <h2 className="services_title">Our Story</h2>
                            <p className="services_description mt-4">
                                Redefining the organization&apos;s process of defining its strategy or direction,
                                and making decisions on allocating its resources to attain strategic goals.
                            </p>
                            <p className="services_description mt-4">
                                At our business consulting company, we embarked on a transformative journey to redefine
                                the very essence of strategic evolution and resource allocation. Our story is woven with the
                                threads of reshaping how organizations conceive and articulate their direction, while pioneering
                                a revolutionary approach to decision-making in pursuit of strategic objectives.
                            </p>
                            <p className="services_description mt-4">
                                With a relentless commitment to innovation, we&apos;ve shattered the conventional norms,
                                breathing new life into the process of strategizing.
                            </p>
                            <p className="services_description mt-4">
                                Guided by an unwavering dedication to our clients,
                                we&apos;ve sculpted a narrative where strategy isn&apos;t merely planned;
                                it&apos;s crafted with precision and executed with brilliance. Our narrative is one of
                                empowerment, where businesses are equipped to transcend the ordinary, to embrace
                                fluidity, and to navigate the intricate web of resource distribution to conquer their goals.
                            </p>
                        </div>

                        <div className="w-full">
                            <img src={story} alt="Our story" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between w-full pt-40">
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

            <div className="mt-[10rem] md:mt-[15rem]">
                <Footer />
            </div>
        </div>
    )
}

export default Solutions