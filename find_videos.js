import fs from 'fs';
import path from 'path';

const dirs = ['.', '/workspace', '/tmp', '/app/applet'];
dirs.forEach(dir => {
    try {
        console.log(`Arquivos em ${dir}:`, fs.readdirSync(dir));
    } catch(e) {
        console.log(`Erro ao ler ${dir}:`, e.message);
    }
});
