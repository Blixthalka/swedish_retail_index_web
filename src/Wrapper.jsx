import { createContext } from 'react';
import { Outlet } from "react-router-dom";
import './app.css';
import Footer from './components/Footer'

export const AppContext = createContext();

function Wrapper() {

    return (
        <div className="bg-transparent min-h-screen">
            <div className="pt-5 pb-20 px-5 ">
                <div className="max-w-2xl mx-auto">
                    <Outlet />
                    <Footer />
                </div>

            </div>
        </div>

    );
}

export default Wrapper;
