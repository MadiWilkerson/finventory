# Image Conversion Guide

## Problem
The `figma:asset` imports don't work outside of Figma Make. You need to replace them with local image paths.

---

## Solution: Two Options

### Option 1: Use the Automated Script

1. **Navigate to your project:**
   ```bash
   cd ~/Desktop/FinventoryCode
   ```

2. **Copy the convert-images.js script** (from Figma Make) to your project root

3. **Run the script:**
   ```bash
   node convert-images.js
   ```

4. **Export images from Figma** and save them to `public/images/` with these names:
   - background-blue.png
   - background-aquarium.png
   - neon-tetra.png
   - kuhli-loach.png
   - guppy.png
   - goldfish.png
   - corydora.png
   - angelfish.png
   - list-bubble.png
   - bubble-button.png
   - bubble-button-lines.png
   - bubble-button-2.png
   - bubble-button-3.png
   - bubble-button-x.png
   - seaweed.png
   - finventory-title.png
   - fish-title-generic.png
   - neon-tetra-title.png
   - kuhli-loach-title.png

---

### Option 2: Manual Find & Replace (Faster if you don't have the images yet)

Use VS Code's Find & Replace (Cmd+Shift+F on Mac, Ctrl+Shift+H on Windows):

#### Step 1: Replace all figma:asset imports with placeholders

**Find:** `import (\w+) from "figma:asset/([a-f0-9]+\.png)";`  
**Replace:** `const $1 = "/images/placeholder.png"; // TODO: Replace with actual image`

Make sure "Use Regular Expression" (.*) is enabled!

#### Step 2: Create a placeholder image

```bash
cd ~/Desktop/FinventoryCode
mkdir -p public/images
# Download a placeholder or create a simple colored square
```

#### Step 3: Test the app

```bash
npm run dev
```

The app should now load (with placeholder images). Then you can gradually replace each image.

---

## Quick Test Without Real Images

If you just want to see if the code runs, create colored placeholders:

```bash
cd ~/Desktop/FinventoryCode/public/images

# Create simple SVG placeholders (macOS/Linux)
echo '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="800"><rect fill="#42a5f5" width="400" height="800"/></svg>' > background-blue.png
echo '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="800"><rect fill="#26c6da" width="400" height="800"/></svg>' > background-aquarium.png
echo '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect fill="#ff6b6b" width="200" height="100"/></svg>' > placeholder.png
```

Then in each file, replace the imports with:
```javascript
const imgBackground1 = "/images/background-aquarium.png";
const imgBackground2 = "/images/background-blue.png";
const imgBackground3 = "/images/background-blue.png";
// ... etc
```

---

## Image Hash to Name Reference

When exporting from Figma, use this mapping:

| Hash | Descriptive Name | What It Is |
|------|------------------|------------|
| ff98dfb4e745aac78d193196de4acb5d57c1c51e | background-blue.png | Blue gradient background |
| 65c9b6d3dc3ef41154515bb1ca224304aa1077fa | background-aquarium.png | Aquarium view background |
| 6b3aaf8fa9c1e0dd365387cfc5cee8708f87c83a | neon-tetra.png | Neon tetra fish image |
| ac84a7f5fcd8f8570e96dc442e34bc1abb6a02d9 | kuhli-loach.png | Kuhli loach fish image |
| d445e3033a1fdf9d1f553d6973c835e7bf6dcd90 | guppy.png | Guppy fish image |
| 54f9f4c8c8f27c6e22b0495b9a6f7bb0bc4c4ee9 | goldfish.png | Goldfish image |
| bc564f321e35930786bc5396608d7334780e807d | corydora.png | Corydora fish image |
| 9479205c618ad9da3e06ae22facf1d9f0f9125e8 | angelfish.png | Angelfish image |
| 0a1046cefc376d091ce06ee168094fc93effc37a | list-bubble.png | Large info bubble |
| bac78a846f97bba1a42ba92f85b00219a6b0b656 | bubble-button.png | Start button bubble |
| 801dd795d32c7dddc46dbec149880c3ed8274861 | bubble-button-lines.png | Menu button with lines |
| 8db05e3de11652005c6c28b236207089d3ebfd32 | bubble-button-2.png | Secondary button |
| a9b70eba2d8160c52304112df998e7693b58b7fe | bubble-button-3.png | Back button |
| 9e5beb7dbd5e32394ba339471f96edb78bd7d376 | bubble-button-x.png | Close X button |
| 1048b23514bec40884f81c0bebb259e30dbd160b | seaweed.png | Seaweed decoration |
| 64e259469f3aa9271aae976c8f8f934c6a1f4f38 | finventory-title.png | Main title graphic |
| b4c05bfcb601669e798a568e52e5e25675667061 | fish-title-generic.png | Generic fish title |
| acd6eeb9d4c3b03618231390a8c4c2d42f1cb2a0 | neon-tetra-title.png | Neon tetra title |
| 32245fae990da535d6ef3dcabcef8b24da332f85 | kuhli-loach-title.png | Kuhli loach title |

---

## After Converting

Once images are converted and in place:

```bash
cd ~/Desktop/FinventoryCode
npm run dev
```

Your app should now work locally! 🎉
