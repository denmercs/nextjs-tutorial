import Link from "next/link";

const About = () => {
    return (
        <div style={{fontSize: "20px", color: "blue"}}>
            <h3>About</h3>
            <Link href="/">
                <button>back</button>
            </Link>
            <p>I was a magician once</p>
        </div>
    )
}

export default About;