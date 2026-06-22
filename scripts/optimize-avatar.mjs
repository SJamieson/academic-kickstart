// Generate a small, fast-loading WebP headshot from the source JPEG.
// Re-run after replacing public/images/avatar.jpg:  node scripts/optimize-avatar.mjs
import sharp from 'sharp';

await sharp('public/images/avatar.jpg')
  .resize(560, 560, { fit: 'cover', position: 'attention' })
  .webp({ quality: 82 })
  .toFile('public/images/avatar.webp');

console.log('wrote public/images/avatar.webp');
