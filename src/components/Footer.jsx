import { Link } from "react-router-dom"
import { instagram, logoWhite, twitter, youtube } from "../assets"

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-footerBg pt-20 pb-10">
      <div className="flex flex-row justify-between w-full mx-auto max-w-[1440px]">
        <Link to="/">
          <img className="w-[200px] h-[45px]" src={logoWhite} alt="Logo white" />
        </Link>

        <div className="flex flex-col">
          <p className="text-white">Pages</p>

          <div className="text-[#BFBFBF] space-y-3 mt-6">
            <p>Home</p>
            <p>About</p>
            <p>Services & Solutions</p>
            <p>Clients & Partners</p>
            <p>Careers</p>
          </div>
        </div>


        <div className="flex flex-col">
          <p className="text-white">Get In Touch</p>

          <div className="text-[#BFBFBF] space-y-3 mt-6">
            <p>Contact Us</p>
            <p>Our Services</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white">Address</p>

          <div className="text-[#BFBFBF] space-y-3 mt-6">
            <p>2464 Street Accra, Ghana</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white">Social Media</p>

          <div className="flex flex-row space-x-4 mt-6">
            <div className=" flex rounded-full h-14 w-14 bg-primary hover:bg-[#5E41D1] cursor-pointer items-center justify-center">
              <img className="w-7 h-7" src={twitter} />
            </div>

            <div className=" flex rounded-full h-14 w-14 bg-primary hover:bg-[#5E41D1] cursor-pointer items-center justify-center">
              <img className="w-7 h-7" src={instagram} />
            </div>

            <div className=" flex rounded-full h-14 w-14 bg-primary hover:bg-[#5E41D1] cursor-pointer items-center justify-center">
              <img className="w-7 h-7" src={youtube} />
            </div>
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-[#888888]/20 mt-28 mb-16 mx-auto max-w-[1440px]" />

      <div className="flex flex-col items-center w-full">
        <p className="text-[#888888]">Designed And Developed By <a className="underline" href="https://studioix.agency">Studio IX</a></p>
        <p className="text-[#888888]">Digital Creative Agency</p>
      </div>
    </div>
  )
}

export default Footer