import React from "react";
import Dashboard from "./Dashboard";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs } = useFetch('http://localhost:3000/blogs')

    return (
        <div className='home'>
            <h1>Home</h1>
        { blogs && <Dashboard blogs={blogs} /> }
    
        </div>
    )
}
export default Home;