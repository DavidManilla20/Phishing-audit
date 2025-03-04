import { useEffect } from 'react';
import axios from 'axios';

const LigaComponent = () => {
    useEffect(() => {
        const fetchLiga = async () => {
            try {
                const response = await axios.get('/');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching liga:', error);
            }
        };

        fetchLiga();
    }, []);

    return null;
};

export default LigaComponent;