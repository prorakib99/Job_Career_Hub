import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Header</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;