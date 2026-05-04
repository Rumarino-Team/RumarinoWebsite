const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const source = path.join(repoRoot, 'docs', '_build', 'html');
const target = path.join(repoRoot, 'public', 'autonomy-docs');

if (!fs.existsSync(source)) {
  console.error(`Sphinx HTML was not found at ${path.relative(repoRoot, source)}.`);
  console.error('Run `npm run docs:sphinx` first.');
  process.exit(1);
}

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });

console.log(`Copied Sphinx HTML to ${path.relative(repoRoot, target)}.`);
