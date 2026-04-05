import fs from 'fs/promises';
import path from 'path';

async function replaceInFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  let original = content;

  // Replace colors
  content = content.replace(/emerald/g, 'green');

  // Replace names
  content = content.replace(/Otso Poultry Farm/g, 'Fhernieotso Poultry Farm');
  content = content.replace(/Otso Poultry/g, 'Fhernieotso Poultry');
  content = content.replace(/Otso Admin/g, 'Fhernieotso Admin');
  content = content.replace(/Otso's/g, "Fhernieotso's");

  if (content !== original) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

async function walkDir(dir) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        await walkDir(fullPath);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
      await replaceInFile(fullPath);
    }
  }
}

walkDir(process.cwd()).catch(console.error);
