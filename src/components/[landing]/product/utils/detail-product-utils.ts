export function getProductImages(basePath: string, maxImages = 5) {
  const images: string[] = [];

  for (let i = 1; i <= maxImages; i++) {
    images.push(`${basePath}/product_${i}.jpg`);
  }

  return images;
}