import React, { useState, useEffect, useRef } from 'react';
import logo from './img/Ramson.jpeg'
function App() {
    const [count, setCount] = useState(7);
    const audioRef = useRef(null);
    const audioEndRef = useRef(new Audio('./Virus-TLSD-detectado.mp3')); // Asegúrate de tener un archivo de sonido en la carpeta public

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            // Mostrar alerta cuando la cuenta regresiva llegue a cero
            alert("INICIANDO PROCESO DE INCRIPTACIÓN");
            handleCloseMessage(); // Reinicia la cuenta regresiva
        }
    }, [count]);

    const handleCloseMessage = () => {
        audioEndRef.current.play(); // play a sonido
        setCount(7); //reinicia la cuenta regresiva para volver a mandarl el mensaje
    };

    const handleMouseEnter = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.play().catch(error => {
                console.error("Error al intentar reproducir el audio:", error);
            });
        }
    };

    const handleMouseLeave = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0; // Reiniciar el audio al inicio
        }
    };

    return (
        <div>
        <audio ref={audioRef}>
            <source src="./sonfonic.mp3" type="audio/mp3" />
        </audio>
        <h2>ENCRIPTACION ARCHIVOS EN: {count}</h2>
        <img 
            src={logo} 
            alt="Ramson" 
            className="App-logo" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
        />
    </div>
    );
}
export default App;