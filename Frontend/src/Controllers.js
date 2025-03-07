import { useEffect } from 'react';
import axios from 'axios';

const LigaComponent = () => {
    useEffect(() => {
        const fetchLiga = async () => {
            try {
                // Cambia la URL a la ruta correcta de tu API
                const response = await axios.get('https://phishing-audit.onrender.com'); // Asegúrate de que esta ruta sea correcta
                console.log(response.data);
            } catch (error) {
                if (error.response) {
                    // La solicitud se realizó y el servidor respondió con un código de estado
                    console.error('Error fetching liga:', error.response.data);
                } else if (error.request) {
                    // La solicitud se realizó pero no se recibió respuesta
                    console.error('No response received:', error.request);
                } else {
                    // Algo sucedió al configurar la solicitud
                    console.error('Error:', error.message);
                }
            }
        };

        fetchLiga();
    }, []);

    return null; // Puedes retornar un componente o un mensaje si lo deseas
};

export default LigaComponent;