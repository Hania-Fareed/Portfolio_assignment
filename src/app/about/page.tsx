import Header from "../components/header"; 

 export default function About(){
    return(
        <div>
            <Header />
            <div className="aboutContainer">
              <h1 className="heading"><span className="theme text-pop-up-top ">My Self</span></h1>
              <p className="aboutPara">I am a hard-working and driven 
                individual who <br/>isn't afraid to face a challenge.
                 I'm passionate <br/>about my work and I know how to get the job done. <br/>
                 I would describe myself as an open and honest person<br/> who doesn't believe in misleading other people and tries<br/> to be fair in everything I do.</p>
                    <div className="about-pictureContainer">
                        <img src="./about.PNG"/>
                    </div>
                    <h2 className="heading"><span className="theme2 text-pop-up-top ">Hobbies</span></h2>
                    <div className="hobbiesList">
                        <li>Reading</li>
                        <li>Cooking</li>
                        <li>Painting</li>
                        <li>Gardening</li>
                    </div>
                    <div className="pictureContainer">
                        <img src="./hobbi.PNG"/>
                    </div>
            </div>
        </div>
    )  
 }