const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'robosub2025');
const outputFile = path.join(__dirname, 'src', 'lib', 'gallery2025-manifest.ts');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const videoExtensions = ['.mp4', '.mov', '.webm'];

// Extract number from filename like "RoboSub2025Dump (123).jpg"
function extractNumber(filename) {
  const match = filename.match(/\((\d+)\)/);
  return match ? parseInt(match[1], 10) : 0;
}

function scanDirectory(dirPath) {
  const items = [];
  
  try {
    const files = fs.readdirSync(dirPath);
    
    // Sort files numerically by the number in parentheses
    const sortedFiles = files.sort((a, b) => {
      const numA = extractNumber(a);
      const numB = extractNumber(b);
      return numA - numB;
    });
    
    sortedFiles.forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      const filePath = `/robosub2025/${file}`;
      const fileNumber = extractNumber(file);
      
      if (imageExtensions.includes(ext)) {
        items.push({
          src: filePath,
          hint: `RoboSub 2025 competition photo #${fileNumber}`,
          type: 'image',
          number: fileNumber
        });
      } else if (videoExtensions.includes(ext)) {
        items.push({
          src: filePath,
          hint: `RoboSub 2025 competition video #${fileNumber}`,
          type: 'video',
          number: fileNumber
        });
      }
    });
    
    console.log(`Found ${items.length} media files`);
    console.log(`- Images: ${items.filter(i => i.type === 'image').length}`);
    console.log(`- Videos: ${items.filter(i => i.type === 'video').length}`);
    
    // Check for number range
    const numbers = items.map(i => i.number).filter(n => n > 0);
    if (numbers.length > 0) {
      console.log(`- Number range: ${Math.min(...numbers)} to ${Math.max(...numbers)}`);
    }
    
    return items;
  } catch (error) {
    console.error('Error scanning directory:', error);
    return [];
  }
}

function generateManifest() {
  const galleryItems = scanDirectory(galleryDir);
  
  // Create lib directory if it doesn't exist
  const libDir = path.dirname(outputFile);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  // Generate TypeScript file content
  const tsContent = `// Auto-generated gallery manifest
// Run 'node generate-gallery-manifest.js' to regenerate

export type GalleryItem = {
  src: string;
  hint: string;
  type: 'image' | 'video';
  number: number;
};

export const gallery2025Data: GalleryItem[] = ${JSON.stringify(galleryItems, null, 2)};

export default gallery2025Data;
`;
  
  // Write the TypeScript file
  fs.writeFileSync(outputFile, tsContent);
  console.log(`\nManifest generated successfully at: ${outputFile}`);
}

generateManifest();