import Link from "next/link"

export default function Header(){
    return(
        <div className="parentContainer">
            <ul className="childContainer">
             <Link href={"/"}><li className="home">Home</li></Link> 
             <Link href={"/about"}><li className="about">About</li></Link> 
             <Link href={"/contact"}><li className="contact">Contact</li></Link> 
            </ul>
        </div>
        
    )
}

