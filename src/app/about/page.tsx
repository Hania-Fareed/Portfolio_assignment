import Header from "../components/header"; 
import Image from 'next/image';

export default function About() {
    return (
        <div>
           <div className="aboutResponsive"><Header /></div> 
            <div className="aboutContainer">
                <h1 className="heading">
                    <span className="theme text-pop-up-top">
                        <span className="my">My</span> Self
                    </span>
                </h1>
                <p className="aboutPara">
                    I am a hard-working and driven individual who isn&apos;t afraid to face a challenge.
                    I&apos;m passionate about my work and I know how to get the job done.
                    I would describe myself as an open and honest person who doesn&apos;t believe in misleading other people and tries to be fair in everything I do.
                </p>
                <div className="about-pictureContainer">
                    <Image src="/about.PNG" alt="About Image" width={500} height={500} />
                </div>
                <div>
                    <h2 className="hobbiHeading">
                        <span className="theme2 text-pop-up-top">Hobbies</span>
                    </h2>
                    <ul className="hobbiesList">
                        <li>Reading</li>
                        <li>Cooking</li>
                        <li>Painting</li>
                        <li>Gardening</li>
                    </ul>
                    <div className="hobbipictureContainer">
                        <Image src="/hobbi.PNG" alt="Hobbies Image" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
}
