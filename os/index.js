require('dotenv').config();
const os = require('os');

const systemInfo = () => {
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Свободная память: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Домашняя папка: ${os.homedir()}`);
    console.log(`Имя устройства: ${os.hostname()}`);
    console.log(`Сетевые подключения:`, os.networkInterfaces());
};

const memoryStatus = () => {
    const availableMemory = os.freemem() / (1024 ** 3); 
    console.log(availableMemory > 4 ? "Достаточно памяти (более 4ГБ)" : "Мало памяти (менее 4ГБ)");
};

const verifyAccess = () => {
    if (process.env.MODE === "admin") {
        console.log("Вы имеете доступ.");
        systemInfo();
    } else {
        console.log("Доступ запрещен.");
    }
};

verifyAccess();
memoryStatus();
