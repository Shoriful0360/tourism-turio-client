import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-[1900px] mx-auto'>
           <header>
            <Navbar/>
           </header>
           {/* dynamic outlet */}
           <main className='min-h-[calc(100vh-200px)]'>
        <Outlet></Outlet>
           </main>
           <footer>
            <Footer/>
           </footer>
        </div>
    );
};

export default MainLayout;