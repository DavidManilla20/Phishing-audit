import React, { useState, useEffect, useRef } from 'react';
import logo from './img/Ramson.jpeg';
import './App.css';

function App() {
    const [count, setCount] = useState(3);
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [loading, setLoading] = useState(false); // Nuevo estado para la línea de carga
    const [progress, setProgress] = useState(0); // Estado para el progreso
    const audioEndRef = useRef(new Audio('./Virus-TLSD-detectado.mp3'));

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            // Activar la animación y mostrar la línea de carga cuando la cuenta regresiva llegue a cero
            setButtonAnimation(true);
            setLoading(true); // Mostrar la línea de carga
            startLoading(); // Iniciar el progreso de carga
        }
    }, [count]);

    const startLoading = () => {
        setProgress(0); // Reiniciar el progreso
        const loadingInterval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 95) {
                    clearInterval(loadingInterval); // Detener el intervalo al llegar al 100%
                    return 95;
                }
                return prevProgress + 5; // Incrementar el progreso
            });
        }, 3000); 
    };

    const handleCloseMessage = () => {
        audioEndRef.current.play();

    };

    return (
        <div>
        {/* Mostrar el texto solo cuando el contador sea mayor que 0 */}
        {count > 0 && (
            <h2>ENCRIPTACION ARCHIVOS EN: {count}</h2>
        )}
        {loading && (
            <div className="loading-container">
                <h3>Proceso de encriptación iniciado</h3>
                <div className="loading-line"></div>
                <h4>{progress}%</h4> {/* Mostrar el progreso */}
            </div>
        )}
        {/* Mostrar el botón solo cuando el contador llegue a cero */}
        {count === 0 && (
            <button 
                className={`alert-button ${buttonAnimation ? 'zoom' : ''}`} 
                onClick={handleCloseMessage}
            >
                CANCELAR ENCRIPTACIÓN
            </button>
        )}
        <br />
        <img 
            src={logo} 
            alt="Ramson" 
            className="App-logo" 
        />
    </div>
);
}

export default App;