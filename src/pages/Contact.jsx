import { useRef, useState } from "react";
import { Footer } from "../components";
import { BiErrorCircle } from "react-icons/bi"

const Contact = () => {
  const form = useRef();
  const [errMsg, setErrMsg] = useState({ name: "", email: "" });
  const [err, setErr] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  //handle timeout
  const handleTimeOut = () => {
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 3000);
  };

  // handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      if (e.target[0].value.trim().length === 0) {
        setErrMsg({ email: "", name: "this field is required" });
        handleTimeOut();
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target[1].value)) {
        setErrMsg({ name: "", email: "invalid email address" });
        handleTimeOut();
      } else {
        setSending(true);
        emailjs
          .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
          )
          .then(
            (result) => {
              setSending(false);
              setSent(true);
            },
            (error) => {
              console.log(error.text);
            }
          )
          .then(() => {
            setTimeout(() => {
              setSent(false);
              form.current.reset();
            }, 3000);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="services_title mt-[3rem] md:mt-[5rem]">Contact Us</h2>
      <p className="services_description mt-2 md:mt-4">Drop us a Line!</p>

      <form
        ref={form}
        onSubmit={handleFormSubmit}
        className="flex flex-col max-w-[1440px] mx-auto w-full items-center pt-24 px-5 md:px-0 pb-52 space-y-8"
      >
        <div className="input_field">
          <input type="text" placeholder="Your name" name="user_name" className={`${errMsg.name.length > 0 && "error"}`} />
          <span className="input_field_asterisk">*</span>
          {errMsg.name.length > 0 && <p className='text-red-600 text-[13px] flex items-center gap-2'><BiErrorCircle />{errMsg.name}</p>}
        </div>
        <div className="input_field">
          <input
            type="email"
            placeholder="email@example.com"
            name="user_email"
            className={`${errMsg.email.length > 0 && "error"}`}
          />
          <span className="input_field_asterisk">*</span>
          {errMsg.email.length > 0 && <p className='text-red-600 text-[13px] flex items-center gap-2'><BiErrorCircle />{errMsg.email}</p>}
        </div>

        <div className="textarea_field">
          <textarea
            className="textarea_input"
            rows={7}
            placeholder="Message"
            name="message"
          />
        </div>
        <button className="bg-primary hover:bg-[#5E41D1] px-12 md:px-12 py-4 text-white rounded-lg">Submit</button>
      </form>
      <button className={`feedback ${sending && "displayFeedback"}`}>
        sending...
      </button>
      <button className={`feedback ${sent && "displayFeedback"}`}>sent</button>
      <button className={`feedback errFeedback ${err && "displayFeedback"}`}>
        something went wrong
      </button>
      <Footer />
    </div>
  );
};

export default Contact;
