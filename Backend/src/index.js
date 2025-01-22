const app = require('./App');
//require('./database'); // Asegúrate de que este archivo esté configurado correctamente

const PORT = process.env.PORT || 4000; // Usa una variable de entorno para el puerto

async function main() {
    try {
        await app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1); // Salir con un código de error
    }
}

main();