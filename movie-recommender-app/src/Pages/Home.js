import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import backImage from "./Components/images/wallpaper.jpg";
import "./Components/styles/HomeStyles.css";
import { useEffect, useState } from "react";

const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        //getting the list of all movies from our flask server for our searchbar
        fetch("/api/movies").then((Response) =>
            Response.json().then((data) => setList(data.arr))
        );
    }, []);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backImage})`,
            }}
            className="container-fluid HomePage"
        >
            <NavBar isHome={false} />

            <div className="HomeSearch">
                {" "}
                {/*Rendering the searchbar */}
                <SearchBar movies={list} placeholder="Search for a Movie" />
            </div>
            <div className="HomeFooter">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
