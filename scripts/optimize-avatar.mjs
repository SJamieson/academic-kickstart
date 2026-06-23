// Generate small, fast-loading WebP images from the source photos.
// Re-run after replacing a source photo:  node scripts/optimize-avatar.mjs
//   public/images/avatar.jpg   -> avatar.webp   (circular hero/About/byline avatar)
//   public/images/portrait.jpg -> portrait.webp (larger About portrait)
//   appearance photos          -> *.webp        (4:3 cards on the About page)
import sharp from 'sharp';

// Square avatars/portraits (displayed circular / rounded).
const square = [
  ['avatar', 560],
  ['portrait', 600],
];
for (const [name, size] of square) {
  await sharp(`public/images/${name}.jpg`)
    .resize(size, size, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(`public/images/${name}.webp`);
  console.log(`wrote public/images/${name}.webp`);
}

// 4:3 appearance photos for the About page cards.
const appearances = ['t-challenge'];
for (const name of appearances) {
  await sharp(`public/images/${name}.jpg`)
    .resize(880, 660, { fit: 'cover', position: 'attention' })
    .webp({ quality: 80 })
    .toFile(`public/images/${name}.webp`);
  console.log(`wrote public/images/${name}.webp`);
}
