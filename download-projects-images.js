// Скрипт для загрузки изображений проектов с CDN
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const projectImages = [
  // Насосная станция
  { url: 'https://cdn.poehali.dev/files/4bafb6c1-883d-4faf-8694-f147cb91846a.jpg', path: '/public/image/projects/pump-station-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/7d3aa69c-61b1-4eb0-b684-08ddfda153a8.jpg', path: '/public/image/projects/pump-station-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/03c39c83-e9f1-4dd4-9526-5041de8cc8fc.jpg', path: '/public/image/projects/pump-station-3.jpg' },
  
  // Кофемашина
  { url: 'https://cdn.poehali.dev/files/b92c500e-cb29-4976-b572-444e596324be.jpg', path: '/public/image/projects/coffee-machine-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/c0f109a1-09c6-41ca-8851-0014f64c7eee.jpg', path: '/public/image/projects/coffee-machine-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/289cd412-0572-4a69-8c5d-a2113ca16e49.jpg', path: '/public/image/projects/coffee-machine-3.jpg' },
  
  // CIP станция
  { url: 'https://cdn.poehali.dev/files/0fbdd3d7-ddbc-4c1d-ad9e-54c05e4cc478.jpg', path: '/public/image/projects/cip-station-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: '/public/image/projects/cip-station-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/4697ffc1-d1cd-4344-8c7e-05f6b70e71c2.jpg', path: '/public/image/projects/cip-station-3.jpg' },
  
  // Пастеризационная установка
  { url: 'https://cdn.poehali.dev/files/ef291fbd-2e7b-4590-8840-21e9c55aaa02.jpg', path: '/public/image/projects/pasteurization-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/38b45870-1be3-4651-ad0f-9541dfcbd8f5.jpg', path: '/public/image/projects/pasteurization-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/9058189b-5477-445c-8da9-80ecdcd17610.jpg', path: '/public/image/projects/pasteurization-3.jpg' },
  
  // Ванна пастеризации
  { url: 'https://cdn.poehali.dev/files/8ea1d273-a24f-4e0e-a236-eed623c8a7b9.jpg', path: '/public/image/projects/pasteurization-bath-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/a0354164-cd50-4936-939c-43e6f1a3345b.jpg', path: '/public/image/projects/pasteurization-bath-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/36817329-1244-473c-9c52-01128ad75fec.jpg', path: '/public/image/projects/pasteurization-bath-3.jpg' },
  
  // Тепловой пункт
  { url: 'https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg', path: '/public/image/projects/thermal-point-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/c16de542-05e9-40e5-8181-a8347ca4fb6b.jpg', path: '/public/image/projects/thermal-point-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/4565a80a-10b7-4f21-9260-8a439930cc8a.jpg', path: '/public/image/projects/thermal-point-3.jpg' },
  
  // Лебёдка
  { url: 'https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg', path: '/public/image/projects/winch-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/57c189d7-0cf9-4b23-85d9-80fb1375670b.jpg', path: '/public/image/projects/winch-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/c203515f-65e8-406d-95c5-d033c6574ede.jpg', path: '/public/image/projects/winch-3.jpg' },
  
  // Система смазки
  { url: 'https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg', path: '/public/image/projects/lubrication-system-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/007eff64-e68b-4ce8-a4a8-878768c740c6.jpg', path: '/public/image/projects/lubrication-system-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/b9629c4b-b14d-4007-a2fc-68a96789bb30.jpg', path: '/public/image/projects/lubrication-system-3.jpg' },
  
  // Дозирование удобрений
  { url: 'https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg', path: '/public/image/projects/fertilizer-dosing-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/36f22fdf-fbc1-494f-9f07-81a2659796b0.jpg', path: '/public/image/projects/fertilizer-dosing-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/6b1c3339-329c-48fb-a41c-c823b6a65c3f.jpg', path: '/public/image/projects/fertilizer-dosing-3.jpg' },
];

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const buffer = await response.arrayBuffer();
    const dir = dirname(filepath);
    
    mkdirSync(dir, { recursive: true });
    writeFileSync(filepath, new Uint8Array(buffer));
    
    console.log(`✅ Downloaded: ${filepath}`);
  } catch (error) {
    console.log(`❌ Failed to download ${url}: ${error.message}`);
  }
}

async function main() {
  console.log('🚀 Starting project images download...\n');
  
  for (const image of projectImages) {
    await downloadImage(image.url, `.${image.path}`);
  }
  
  console.log('\n✨ Project images download completed!');
}

main().catch(console.error);