import Title from "../title/Title";

const About = ({info}) => {
    return (
        <div>
            <Title text={info.title}/>
            <p> {info.body}</p>
        </div>
    )

}

export default About;