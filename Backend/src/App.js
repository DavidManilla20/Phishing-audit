const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { formatInTimeZone } = require('date-fns-tz');

const app = express();
const PORT = process.env.PORT || 4000;

// Configurar Express
app.set('trust proxy', true);

//Flujo de escritura para registro
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Configura morgan para registrar en el archivo acces.log
app.use(morgan('combined', { stream: accessLogStream }));
// Registrar la fecha, hora, IP de acceso y hostname
app.use((req, res, next) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const hostname = req.hostname;
    const timeZone = 'America/Mexico_City';
    const formattedDate = formatInTimeZone(new Date(), timeZone, 'dd/MMM/yyyy:HH:mm:ss OOOO');

    // Crea la entrada de registro
    const logEntry = `${userIp} - - [${formattedDate}] "${req.method} ${req.url}" Hostname: ${hostname}`;
    
    console.log(logEntry); // Cambia fs.appendFile por console.log
    
    next();
});
app.get('https://phishing-audit.onrender.com/', (req, res) => {
    res.send('Bienvenido a la Liga');
});

// Inicia el servidor
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

module.exports = app;
