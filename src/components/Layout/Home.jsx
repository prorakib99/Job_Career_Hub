import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { createContext } from 'react';

export const Jobs = createContext('Jobs')
const Home = () => {
    const jobs = useLoaderData();
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