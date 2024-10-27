"use client";
import Header from "./components/header"; 
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="mainContainer  color-change-2x">
     <div className="homeHeader"> <Header/> </div>
      <div>
        <div className="mainHeading">My Portfolio</div>
        <div className="profile-pic rotate-center ">
           <img src="https://sharedp.com/wp-content/uploads/2024/06/cute-cartoon-girl-images-960x1024.jpg" alt="Profile Pic"/>
         </div>
        <h2 className="heading2"><span className="myName">Hello, I'm</span> <br/> {" "}
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hania Fareed',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Learning web development',
        1000,
        'Student at governorhouse',
        1000,
        'HTML, CSS, JavaScript',
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h2>
        <p className="descriptionHome">a person formally engaged in learning, especially<br/> one enrolled
           in a school or college; pupil: a student <br/>at Yale. Any person who studies, investigates, or performs <br/>research in a university or college setting.
           a person who is eng</p>
      </div>
         <div className="resumeContainer">
          <h1>Click Here 👇🏻 </h1>
           <Link href={"resume"}>
           <li className="resume">RESUME</li>
           </Link>
         </div>
    </div>
  );
}