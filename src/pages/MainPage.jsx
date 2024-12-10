import About from "../components/about/About";
import Title from "../components/title/Title";

const MainPage = () => {
    return(
        <>
            <Title text={"Hello world"}/>
            <About info={{title: "Some Title", body:"Some body"}}/>
            git init
        </>
    )
}


export default MainPage;