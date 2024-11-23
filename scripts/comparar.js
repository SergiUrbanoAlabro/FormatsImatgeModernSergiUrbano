//comprar imatges webp amb jpeg
import { statSync } from "fs";
import { join } from "path";

const carpetaImg = '/images';
const taulaComparacio = document.getElementById('table-body');

console.log('ABCDS ', taulaComparacio);


function filterByExtension(files, extensions) {
    return files.filter(file => extensions.includes(extname(file).toLowerCase()));
}

const jpgFiles = filterByExtension(files, [".jpg"]);
const webpFiles = filterByExtension(files, [".webp"]);

const jpgMap = new Map(jpgFiles.map(file => [basename(file, ".jpg"), file]));
const webpMap = new Map(webpFiles.map(file => [basename(file, ".webp"), file]));

for (const [baseName, jpgFile] of jpgMap) {
    if (webpMap.has(baseName)) {
        const webpFile = webpMap.get(baseName);

        const jpgPath = join(carpetaImg, jpgFile);
        const webpPath = join(carpetaImg, webpFile);
        const jpgSize = statSync(jpgPath).size / 1024;
        const webpSize = statSync(webpPath).size / 1024;

        const reduccio = ((jpgSize - webpSize) / jpgSize * 100).toFixed(2);
    }
}