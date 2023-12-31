import { Footer, Mission, Slideshow, Team } from "../components"

const About = () => {
    return (
        <div className="pt-28 md:pt-20">
            <Mission />
            <Team />
            <Slideshow />
            <div className="mt-[10rem] md:mt-[15rem]">
                <Footer />
            </div>
        </div>
    )
}

export default About