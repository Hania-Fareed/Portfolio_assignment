import Header from "./components/header"; 

import Link from "next/link";
export default function Home() {
  return (
    <div className="mainContainer  color-change-2x">
      <Header/>
      <div>
        <div className="mainHeading">My Portfolio</div>
        <h2 className="heading">Hello, I'm <span className="myName">Hania Fareed</span></h2>
        <p className="descriptionHome">a person formally engaged in learning, especially<br/> one enrolled
           in a school or college; pupil: a student <br/>at Yale. Any person who studies, investigates, or performs <br/>research in a university or college setting.
           a person who is eng</p>
      </div>
         <div className="profile-pic rotate-center ">
           <img src="https://sharedp.com/wp-content/uploads/2024/06/cute-cartoon-girl-images-960x1024.jpg" alt="Profile Pic"/>
         </div>
         <div className="resumeContainer">
           <Link href={"resume"}>
           <li className="resume">RESUME</li>
           </Link>
         </div>
    </div>
  );
}