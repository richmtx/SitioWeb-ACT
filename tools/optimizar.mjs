import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

// Carpeta de entrada y de salida
const ENTRADA = 'tools/originales';
const SALIDA = 'public/img';

// Ancho máximo y calidad
const ANCHO = 2560;
const CALIDAD = 80;

await mkdir(SALIDA, { recursive: true });

const archivos = (await readdir(ENTRADA))
    .filter(n => /\.(png|jpe?g|tiff?)$/i.test(n));

if (archivos.length === 0) {
    console.log(`No hay imágenes en ${ENTRADA}`);
}

for (const archivo of archivos) {
    const { name } = parse(archivo);
    const destino = join(SALIDA, `${name}.webp`);

    await sharp(join(ENTRADA, archivo))
        .resize({ width: ANCHO, withoutEnlargement: true })
        .webp({ quality: CALIDAD })
        .toFile(destino);

    console.log(`✓ ${archivo} → ${name}.webp`);
}