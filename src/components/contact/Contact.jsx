import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
           <div className="cSection left">
            <form>
                <h1 className="cTitle">
                    Let's Talk!
                </h1>
                <div className="formItem">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name"/>
                </div>
                <div className="formItem">
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div className="formItem">
                    <label>Write Your Message Here</label>
                    <textarea rows="10" placeholder="Enter your message"></textarea>
                </div>
                <button className="formButton">Submit</button>
            </form>
           </div>
           <div className="cSection right">
            
           </div>
        </div>
    )
}

export default Contact 