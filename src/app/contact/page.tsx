import Header from "../components/header"

export default function Contact() {
    return(
        <div>
            <div className="aboutResponsive"><Header /></div>
            <div>
                <h1 className="heading-3">Contact</h1>
                <p className="contactPara">Feel free to contact me using the following details:</p>
                <ul className="contactList">
                    <li>Email: hania.fareed@gmail.com</li>
                    <li>Phone: +91 9999999999</li>
                    <li>Address: 123 Main St, Anytown, USA</li>
                </ul>
                <p className="contactPara">I am always open to discussing new projects or opportunities.</p>
                <p className="contactPara">Note: This is a static version of my contact page. Actual contact 
                <br/>form implementation depends on your backend technology and frontend framework.</p> 
            </div>
        </div>
    )
}