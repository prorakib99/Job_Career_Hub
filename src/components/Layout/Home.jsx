import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { createContext, useEffect, useState } from 'react';

export const Jobs = createContext('Jobs')
const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('./data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Jobs.Provider value={jobs}>
                <Outlet></Outlet>
            </Jobs.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Home;