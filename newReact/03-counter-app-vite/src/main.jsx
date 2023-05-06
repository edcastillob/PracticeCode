import React from 'react';
import ReactDOM from 'react-dom/client';
//import {App} from './HelloWorkApp';
 //import {FirtsApp} from './FirtsApp';
import './Styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>  
        <CounterApp value={0}/>
        {/* <FirtsApp title={"Hola, soy el padre de la tecnología"}/> */}
    </React.StrictMode>
)
