import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateIcons() {
  const svgPath = path.join(__dirname, '../public/pwa-icon.svg');
  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(svgPath)) {
    console.error('SVG file not found:', svgPath);
    return;
  }

  try {
    // Generate 192x192 icon
    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'pwa-192x192.png'));
    
    console.log('✅ Generated pwa-192x192.png');

    // Generate 512x512 icon
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'pwa-512x512.png'));
    
    console.log('✅ Generated pwa-512x512.png');

    // Generate apple-touch-icon
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    
    console.log('✅ Generated apple-touch-icon.png');

    // Generate favicon
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    
    console.log('✅ Generated favicon-32x32.png');

    console.log('🎉 All PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
