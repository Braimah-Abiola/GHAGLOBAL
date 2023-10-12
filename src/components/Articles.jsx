import { articleOne, articleThree, articleTwo, calendar, user } from "../assets"

const Articles = () => {
    return (
        <div className="flex flex-col w-full mx-auto max-w-[1440px] md:mt-[20rem]">
            <div className="flex flex-row items-end space-x-4">
                <p className="">New Releases</p>
                <div className="w-[75px] h-[2px] bg-black/25" />
            </div>
            <h3 className="services_title mt-5">Articles You May Read</h3>

            <div className="w-full flex flex-row space-x-10 mt-16">
                <div className="h-[650px] w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="h-[320px] rounded-t-[20px]" src={articleOne} alt="Article one" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p>GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p>GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6">GHA GLOBAL Received Certification</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="h-[650px] w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="h-[320px] rounded-t-[20px]" src={articleTwo} alt="Article one" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p>GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p>GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6">GHA GLOBAL Received Certification</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                            Read More
                        </button>

                    </div>
                </div>

                <div className="h-[650px] w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="h-[320px] rounded-t-[20px]" src={articleThree} alt="Article one" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p>GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p>GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6">GHA GLOBAL Received Certification</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                            Read More
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles