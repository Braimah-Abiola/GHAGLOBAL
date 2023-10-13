import Marquee from "react-fast-marquee"
import { companyOne, companyThree, companyTwo } from "../assets"


const Partners = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col w-full mx-auto max-w-[1440px] mt-[2rem] md:mt-[5rem] px-5 md:px-0">
                <div className="flex flex-row items-end space-x-4">
                    <p className="">Our Partners</p>
                    <div className="w-[75px] h-[2px] bg-black/25" />
                </div>
                <h3 className="services_title mt-5">Global Partners</h3>
            </div>

            <div className="mt-12">
                <Marquee autoFill>
                    <img className=" w-[260px] h-[75px]" src={companyOne} alt="Renew toxocology" />
                    <img className=" w-[260px] h-[75px]" src={companyTwo} alt="Renew toxocology" />
                    <img className=" w-[260px] h-[75px]" src={companyThree} alt="Renew toxocology" />
                </Marquee>
            </div>


            <div className="flex flex-col w-full mx-auto max-w-[1440px] mt-[5rem] md:mt-[10rem] px-5 md:px-0">
                <div className="flex flex-row items-end space-x-4">
                    <p className="">Our Clients</p>
                    <div className="w-[75px] h-[2px] bg-black/25" />
                </div>
                <h3 className="services_title mt-5">Global Clients</h3>
            </div>

            <div className="mt-12">
                <Marquee autoFill>
                    <img className=" w-[260px] h-[75px]" src={companyOne} alt="Renew toxocology" />
                    <img className=" w-[260px] h-[75px]" src={companyTwo} alt="Renew toxocology" />
                    <img className=" w-[260px] h-[75px]" src={companyThree} alt="Renew toxocology" />
                </Marquee>
            </div>

        </div >
    )
}

export default Partners