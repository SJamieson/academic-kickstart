// Generate small, fast-loading WebP images from the source photos.
// Re-run after replacing a source photo:  node scripts/optimize-avatar.mjs
//   public/images/avatar.jpg   -> avatar.webp   (circular hero/About/byline avatar)
//   public/images/portrait.jpg -> portrait.webp (larger About portrait)
import sharp from 'sharp';

await sharp('public/images/avatar.jpg')
  .resize(560, 560, { fit: 'cover', position: 'attention' })
  .webp({ quality: 82 })
  .toFile('public/images/avatar.webp');
console.log('wrote public/images/avatar.webp');

await sharp('public/images/portrait.jpg')
  .resize(600, 600, { fit: 'cover', position: 'attention' })
  .webp({ quality: 82 })
  .toFile('public/images/portrait.webp');
console.log('wrote public/images/portrait.webp');
