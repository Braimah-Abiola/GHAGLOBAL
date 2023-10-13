import Marquee from "react-fast-marquee"
import { companyOne, companyThree, companyTwo } from "../assets"

const Companies = () => {
    return (
        <div className="w-full flex flex-col bg-white">
            <Marquee autoFill>
                <img className=" w-[260px] h-[75px]" src={companyOne} alt="Renew toxocology" />
                <img className=" w-[260px] h-[75px]" src={companyTwo} alt="Renew toxocology" />
                <img className=" w-[260px] h-[75px]" src={companyThree} alt="Renew toxocology" />
            </Marquee>
        </div>
    )
}

export default Companies