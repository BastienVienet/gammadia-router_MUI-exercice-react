import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Faq} from "./components/Faq";
import {PageNotFound} from "./components/PageNotFound";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='faq' element={<Faq/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
