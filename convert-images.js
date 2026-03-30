#!/usr/bin/env node

/**
 * Script to convert figma:asset imports to local image paths
 * 
 * Usage:
 * 1. Export all images from Figma to ~/Desktop/FinventoryCode/public/images/
 * 2. Run: node convert-images.js
 * 
 * This will replace all:
 *   import imgName from "figma:asset/hash.png";
 * with:
 *   const imgName = "/images/[descriptive-name].png";
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Image mapping - maps the hash to a descriptive name
const IMAGE_MAP = {
  // Backgrounds
  'ff98dfb4e745aac78d193196de4acb5d57c1c51e.png': 'background-blue.png',
  '65c9b6d3dc3ef41154515bb1ca224304aa1077fa.png': 'background-aquarium.png',
  
  // Fish
  '6b3aaf8fa9c1e0dd365387cfc5cee8708f87c83a.png': 'neon-tetra.png',
  'ac84a7f5fcd8f8570e96dc442e34bc1abb6a02d9.png': 'kuhli-loach.png',
  'd445e3033a1fdf9d1f553d6973c835e7bf6dcd90.png': 'guppy.png',
  '54f9f4c8c8f27c6e22b0495b9a6f7bb0bc4c4ee9.png': 'goldfish.png',
  'bc564f321e35930786bc5396608d7334780e807d.png': 'corydora.png',
  '9479205c618ad9da3e06ae22facf1d9f0f9125e8.png': 'angelfish.png',
  
  // Bubbles
  '0a1046cefc376d091ce06ee168094fc93effc37a.png': 'list-bubble.png',
  'bac78a846f97bba1a42ba92f85b00219a6b0b656.png': 'bubble-button.png',
  '801dd795d32c7dddc46dbec149880c3ed8274861.png': 'bubble-button-lines.png',
  '8db05e3de11652005c6c28b236207089d3ebfd32.png': 'bubble-button-2.png',
  'a9b70eba2d8160c52304112df998e7693b58b7fe.png': 'bubble-button-3.png',
  '9e5beb7dbd5e32394ba339471f96edb78bd7d376.png': 'bubble-button-x.png',
  
  // Seaweed
  '1048b23514bec40884f81c0bebb259e30dbd160b.png': 'seaweed.png',
  
  // Titles
  '64e259469f3aa9271aae976c8f8f934c6a1f4f38.png': 'finventory-title.png',
  'b4c05bfcb601669e798a568e52e5e25675667061.png': 'fish-title-generic.png',
  'acd6eeb9d4c3b03618231390a8c4c2d42f1cb2a0.png': 'neon-tetra-title.png',
  '32245fae990da535d6ef3dcabcef8b24da332f85.png': 'kuhli-loach-title.png',
};

function walkSrc(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walkSrc(full, out);
    } else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      out.push(full);
    }
  }
  return out;
}

function collectFilesToProcess() {
  const srcDir = path.join(__dirname, 'src');
  return walkSrc(srcDir).filter((filePath) => {
    try {
      return fs.readFileSync(filePath, 'utf8').includes('figma:asset');
    } catch {
      return false;
    }
  });
}

function convertFile(fullPath) {
  const relPath = path.relative(__dirname, fullPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${relPath} - file not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  
  // Replace each figma:asset import
  content = content.replace(
    /import\s+(\w+)\s+from\s+"figma:asset\/([a-f0-9]+\.png)";/g,
    (match, varName, hash) => {
      modified = true;
      const newName = IMAGE_MAP[hash] || hash;
      return `const ${varName} = "/images/${newName}";`;
    }
  );
  
  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Converted ${relPath}`);
  } else {
    console.log(`⏭️  No changes needed for ${relPath}`);
  }
}

function printImageList() {
  console.log('\n📋 Images you need to export from Figma:\n');
  console.log('Save these to: ~/Desktop/FinventoryCode/public/images/\n');
  
  const uniqueImages = new Set(Object.values(IMAGE_MAP));
  uniqueImages.forEach(img => {
    console.log(`   • ${img}`);
  });
  
  console.log('\n');
}

// Main execution
console.log('🔄 Converting figma:asset imports to local paths...\n');

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('📁 Created public/images directory\n');
}

collectFilesToProcess().forEach(convertFile);

printImageList();

console.log('✨ Done! Next steps:');
console.log('1. Export all images from Figma');
console.log('2. Save them to public/images/ with the names listed above');
console.log('3. Run: npm run dev\n');
