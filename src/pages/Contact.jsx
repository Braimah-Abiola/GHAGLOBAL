import { Footer } from "../components"

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="services_title md:mt-[5rem]">Contact Us</h2>
            <p className="services_description mt-4">Drop us a Line!</p>

            <div className="flex flex-col max-w-[1440px] mx-auto w-full items-center pt-24 pb-52 space-y-8">
                <div className="input_field">
                    <input type="text" placeholder="Your name" />
                    <span className="input_field_asterisk">*</span>
                </div>
                <div className="input_field">
                    <input type="email" placeholder="email@example.com" />
                    <span className="input_field_asterisk">*</span>
                </div>

                <div className="textarea_field">
                    <textarea className="textarea_input" rows={7} placeholder="Message" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact