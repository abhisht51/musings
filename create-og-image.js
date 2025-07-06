// Simple script to create a basic OG image
// You can run this in a browser console or use a tool like Puppeteer

const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 630;
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, '#1e293b');
gradient.addColorStop(1, '#334155');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Title
ctx.fillStyle = '#60a5fa';
ctx.font = 'bold 48px JetBrains Mono, monospace';
ctx.textAlign = 'center';
ctx.fillText('~/musings', 600, 200);

// Main title
ctx.fillStyle = '#ffffff';
ctx.font = '600 42px JetBrains Mono, monospace';
ctx.fillText("Abhisht's Musings", 600, 280);

// Subtitle
ctx.fillStyle = '#e2e8f0';
ctx.font = 'italic 24px JetBrains Mono, monospace';
ctx.fillText('Coding thoughts, AI insights, and developer musings', 600, 340);

// Terminal command
ctx.fillStyle = '#1e293b';
ctx.fillRect(300, 420, 600, 80);
ctx.strokeStyle = '#475569';
ctx.lineWidth = 2;
ctx.strokeRect(300, 420, 600, 80);

ctx.fillStyle = '#60a5fa';
ctx.font = '18px JetBrains Mono, monospace';
ctx.textAlign = 'left';
ctx.fillText('$ ', 320, 470);

ctx.fillStyle = '#10b981';
ctx.fillText('cat thoughts.md | share', 350, 470);

// Convert to image
const dataURL = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.download = 'og-default.png';
link.href = dataURL;
link.click();

console.log('OG image created! Check your downloads folder.');