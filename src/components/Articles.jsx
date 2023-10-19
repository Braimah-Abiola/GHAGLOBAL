import { Link } from "react-router-dom"
import { articleOne, articleThree, articleTwo, calendar, user } from "../assets"

const Articles = () => {
    return (
        <div className="flex flex-col w-full mx-auto max-w-[1440px] mt-[5rem] md:mt-[20rem]">
            <div className="flex flex-row items-end space-x-4 px-5 md:px-0">
                <p className="">New Releases</p>
                <div className="w-[75px] h-[2px] bg-black/25" />
            </div>
            <h3 className="services_title mt-5 px-5 md:px-0">Articles You May Read</h3>

            <div className="w-full flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 mt-16 px-5 md:px-0">
                <div className="md:h-[650px] w-full md:w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full md:h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="md:h-[320px] rounded-t-[20px]" src={articleOne} alt="Article one" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-6 md:space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6 font-schibsted font-medium text-[18px] mb-1">GHA GLOBAL Received Certification</h4>
                        <p className=" font-schibsted font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <Link to="featured-articles-one">
                            <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                                Read More
                            </button>
                        </Link>

                    </div>
                </div>

                <div className="md:h-[650px] w-full md:w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full md:h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="md:h-[320px] rounded-t-[20px]" src={articleTwo} alt="Article two" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-6 md:space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6 font-schibsted font-medium text-[18px] mb-1">GHA GLOBAL Received Certification</h4>
                        <p className=" font-schibsted font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <Link to="featured-articles-two">
                            <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                                Read More
                            </button>
                        </Link>

                    </div>
                </div>

                <div className="md:h-[650px] w-full md:w-[450px] bg-white shadow-xl rounded-[20px] flex flex-col">
                    <div className="w-full md:h-[320px] bg-[#D9D9D9] rounded-t-[20px]">
                        <img className="md:h-[320px] rounded-t-[20px]" src={articleThree} alt="Article three" />
                    </div>

                    <div className="p-8">
                        <div className="w-full flex flex-row space-x-6 md:space-x-20 my-2">
                            <div className="flex flex-row space-x-4">
                                <img src={user} alt="User" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>

                            <div className="flex flex-row space-x-4">
                                <img src={calendar} alt="Date" />
                                <p className=" font-normal font-schibsted">GHA Global</p>
                            </div>
                        </div>

                        <h4 className="mt-6 font-schibsted font-medium text-[18px] mb-1">GHA GLOBAL Received Certification</h4>
                        <p className=" font-schibsted font-normal">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            sed diam nonumy  tempor invidunt ut labore et
                            magna aliquyam erat, sed diam voluptua.....
                        </p>

                        <Link to="featured-articles-three">
                            <button className="bg-primary hover:bg-[#5E41D1] px-8 py-4 text-white rounded-lg mt-8">
                                Read More
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles