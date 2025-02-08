import "./contact.css"
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react"

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, 
            form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
            },
          );
      };

    return (
        <div className="contact" ref={form} onSubmit={sendEmail}>
           <div className="cSection">
            <form>
                <h1 className="cTitle">
                    Let's Talk!
                </h1>
                <div className="formItem">
                    <label>Your Name</label>
                    <input type="text" name="user_username" placeholder="Enter your name"/>
                </div>
                <div className="formItem">
                    <label>Your Email</label>
                    <input type="email" name="user_email" placeholder="Enter your email"/>
                </div>
                <div className="formItem">
                    <label>Write Your Message Here</label>
                    <textarea rows={10} name="user_message" placeholder="Enter your message"></textarea>
                </div>
                <button className="formButton">Submit</button>
                {success && <span>Your message has been sent!</span>}
                {error && <span>Something went wrong!</span>}
                
            </form>
           </div>
           <div className="cSection">
            SVG
           </div>
        </div>
    )
}

export default Contact 