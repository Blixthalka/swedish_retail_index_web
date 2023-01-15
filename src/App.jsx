import React, { createContext } from 'react';
import { Outlet } from "react-router-dom";
import './app.css';

export const AppContext = createContext();

function App() {


    return (
        <AppContext.Provider value={{}}>
            <Outlet />
        </AppContext.Provider>
    );
}

export default App;
