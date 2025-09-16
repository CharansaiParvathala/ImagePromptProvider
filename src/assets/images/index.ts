// This file automatically imports all images and exports them as a single object

// 1. Get all image paths using import.meta.glob
const imageModules = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

// 2. Create a clean object with just the filename and path
const images: { [key: string]: string } = {};
for (const path in imageModules) {
  const fileName = path.split('/').pop()!; // Get the filename from the path
  images[fileName] = (imageModules[path] as any).default;
}

export default images;