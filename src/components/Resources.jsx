import { doc } from "../assets"

const Resources = () => {
    return (
        <div>
            <div className="flex flex-col w-full mx-auto max-w-[1440px] mt-[8rem] md:mt-[10rem]">
                <div className="flex flex-row items-end space-x-4 px-5 md:px-0">
                    <p className="">Resources</p>
                    <div className="w-[75px] h-[2px] bg-black/25" />
                </div>
                <h3 className="services_title mt-5 px-5 md:px-0">Download Resources</h3>


                <div className="w-full flex flex-col md:flex-row justify-between mt-[3rem] md:mt-[5rem] space-x-0 space-y-5 md:space-y-0 md:space-x-8 px-5 md:px-0">
                    <div className="flex flex-col p-8 h-[425px] w-full md:w-[360px] bg-[#DBD7EE] justify-between rounded-[20px] items-center">
                        <div className="w-full items-center flex flex-col justify-center space-y-6 mt-10">
                            <div className="flex items-center justify-center w-36 h-36 bg-white rounded-full border-[4px] border-primary/25">
                                <img src={doc} alt="Document" />
                            </div>
                            <p className="font-schibsted font-medium text-[20px] md:text-[24px]">Company Profile</p>
                        </div>



                        <div className="w-full ">
                            <button className="bg-primary hover:bg-[#5E41D1] w-full py-4 text-white rounded-lg">
                                Download
                            </button>
                        </div>

                    </div>

                    <div className="flex flex-col p-8 h-[425px] w-full md:w-[360px] bg-[#DBD7EE] justify-between rounded-[20px] items-center">
                        <div className="w-full items-center flex flex-col justify-center space-y-6 mt-10">
                            <div className="flex items-center justify-center w-36 h-36 bg-white rounded-full border-[4px] border-primary/25">
                                <img src={doc} alt="Document" />
                            </div>
                            <p className="font-schibsted font-medium text-[20px] md:text-[24px]">Company Profile</p>
                        </div>



                        <div className="w-full ">
                            <button className="bg-primary hover:bg-[#5E41D1] w-full py-4 text-white rounded-lg">
                                Download
                            </button>
                        </div>

                    </div>

                    <div className="flex flex-col p-8 h-[425px] w-full md:w-[360px] bg-[#DBD7EE] justify-between rounded-[20px] items-center">
                        <div className="w-full items-center flex flex-col justify-center space-y-6 mt-10">
                            <div className="flex items-center justify-center w-36 h-36 bg-white rounded-full border-[4px] border-primary/25">
                                <img src={doc} alt="Document" />
                            </div>
                            <p className="font-schibsted font-medium text-[20px] md:text-[24px]">Company Profile</p>
                        </div>



                        <div className="w-full ">
                            <button className="bg-primary hover:bg-[#5E41D1] w-full py-4 text-white rounded-lg">
                                Download
                            </button>
                        </div>

                    </div>

                    <div className="flex flex-col p-8 h-[425px] w-full md:w-[360px] bg-[#DBD7EE] justify-between rounded-[20px] items-center">
                        <div className="w-full items-center flex flex-col justify-center space-y-6 mt-10">
                            <div className="flex items-center justify-center w-36 h-36 bg-white rounded-full border-[4px] border-primary/25">
                                <img src={doc} alt="Document" />
                            </div>
                            <p className="font-schibsted font-medium text-[20px] md:text-[24px]">Company Profile</p>
                        </div>



                        <div className="w-full ">
                            <button className="bg-primary hover:bg-[#5E41D1] w-full py-4 text-white rounded-lg">
                                Download
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources