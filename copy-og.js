import fs from 'fs';
import path from 'path';

// Create public folder
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Read the image file
const source = path.join(process.cwd(), 'src/assets/images/futuristic_pendrive2.png');
const dest = path.join(publicDir, 'og-image.png');

if (fs.existsSync(source)) {
  fs.copyFileSync(source, dest);
  console.log('Copied successfully!');
} else {
  console.log('Source file not found.');
}
