const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFaviconFromNewLogo() {
  try {
    const inputPath = path.join(__dirname, 'public', 'SEVO_Logo3 (1) (1).png');
    const outputDir = path.join(__dirname, 'public');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('New logo file not found:', inputPath);
      return;
    }

    // Create favicon.ico (32x32) - çok daha büyük ve parlak
    await sharp(inputPath)
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .modulate({ brightness: 3, saturation: 0 }) // 3x daha parlak ve tam beyaz
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // Create favicon.ico (16x16) - çok daha büyük
    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .modulate({ brightness: 3, saturation: 0 }) // 3x daha parlak ve tam beyaz
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));

    // Create apple-touch-icon (180x180) - çok daha parlak
    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .modulate({ brightness: 3, saturation: 0 }) // 3x daha parlak ve tam beyaz
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Create android-chrome icons (192x192, 512x512) - çok daha parlak
    await sharp(inputPath)
      .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .modulate({ brightness: 3, saturation: 0 }) // 3x daha parlak ve tam beyaz
      .png()
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

    await sharp(inputPath)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .modulate({ brightness: 3, saturation: 0 }) // 3x daha parlak ve tam beyaz
      .png()
      .toFile(path.join(outputDir, 'android-chrome-512x512.png'));

    console.log('✅ Favicon files created from new logo successfully!');
    console.log('Created files with maximum brightness from SEVO_Logo3 (1) (1).png:');
    console.log('- favicon-32x32.png (64x64)');
    console.log('- favicon-16x16.png (32x32)');
    console.log('- apple-touch-icon.png (180x180)');
    console.log('- android-chrome-192x192.png (192x192)');
    console.log('- android-chrome-512x512.png (512x512)');

  } catch (error) {
    console.error('Error creating favicon from new logo:', error);
  }
}

createFaviconFromNewLogo();
