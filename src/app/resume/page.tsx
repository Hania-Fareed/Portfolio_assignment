import Header from "../components/header";

export default function resume(){
    return(
        <div className="container">
            <Header />
            <div className="heading1">
            <span className="color">Static Interactive Resume</span>
            </div>
        <div className="profile">
            <div className="profile_container">
                <div className="profile_profileImg">
                    <img src="./profile.PNG" alt="Hania Fareed"/>
                </div>
                <div>
                    <h1 className="profile_name">
                       <span className="profile_name_firstName">Hania</span>
                       <span className="profile_name_lastName"> Fareed</span>
                    </h1>
                    <p className="profile_title">Software Developer</p>
                    <p className="description">
                        I am a student at Governor House and learning Artificial Intelligence Web 3.0 and Metaverse.<br/>I have a strong foundation in programming languages such as HTML, Java, and C++.<br/>
                        I am an enthusiastic, self-motivated, reliable, responsible and hard working person.<br/> I am a mature team worker and adaptable to all challenging situations.
                    </p>
                    <a className="downloadBtn" href="./cv.pdf" download="Resume.pdf">Download Btn</a>
                </div>
            </div>
        </div>
        <div className="group-1">
            <div className="expertise">
                <h3 className="title">Skills</h3>
                <ul className="skill_list description">
                    <li>Typescript</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Ms Word</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="Reference">
                <h3 className="title">Reference</h3>
                <ul className="reference_name: description">
                    <li>Sir Kamran Khan Tessori</li>
                    <li>sir Anas Mirza</li>
                    <li>sir Ubaid Ur Rehman</li>
                </ul>
            </div>
            <div className="edu">
                <h3 className="title">Education</h3>
                <div className="edu_item">
                    <p className="item_pretittle: description">Matric (ongoing)</p>
                    <h4 className="item_title: description">Artificial Intelligence Web 3.0 & Metaverse</h4>
                    <p className="item_subsubtitle: description">
                        Governor House Karachi 
                    </p>
                </div>
             </div>
        </div>
            <div className="group-2">
         <div className="exp">
                <h3 className="title">Experience</h3>
                <div className="exp_item">
                    <p className="description">seeking an opportunity as a fresh candidate to start my professional career</p>
                </div>
            </div>
            <div className="certification">
                <h3 className="title">Certification</h3>
                <div className=" description">
                    Artificial Intelligence,Web 3.0 & Metaverse
                </div>
            </div>
            <div className="interest">
                <h3 className="title">Interest</h3>
                <div className="interest_items">
                    <div className="interest_item">
                       <i data-feather="book"></i>
                       <span>books</span>
                    </div>
                    <div className="interest_item">
                       <i data-feather="code"></i>
                       <span>coding</span>
                    </div>
                    <div className="interest_item">
                       <i data-feather="music"></i>
                       <span>music</span>
                </div>
            </div>    
        </div>
        <hr/>
        <div className="group-3">
        <div className="contact">
            <h3 className="title">Contact</h3>
            <div className="contact_info">
                <p className="description">
                    Bahria Town Karachi 
                </p>
                <p className="description">
                   +92 321 8318143
                </p>
                <p className="description">
                    haniafareed7@gmail.com
                </p>
            </div>
        </div>    
        <div className="socials">
            <h3 className="title">Socials</h3>
            <div className="social_items">
                <a href="#" className="social_item">
                    <i data-feather="github"></i>
                    <span>/Hania-fareed</span>
                </a>
            </div>
        </div>
        </div>
    </div>
    <script>
        feather.replace()
    </script>
        </div>
        
    )
 
}