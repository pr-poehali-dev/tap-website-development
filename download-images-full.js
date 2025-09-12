// Полный скрипт для загрузки всех изображений с CDN
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import fetch from 'node-fetch';

const images = [
  // Логотип компании (общий)
  { url: 'https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png', path: '/public/image/logo.png' },
  
  // SEO изображение
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: '/public/image/seo/og-default.jpg' },
  
  // Страница AISI
  { url: 'https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg', path: '/public/image/aisi/main.jpg' },
  { url: 'https://cdn.poehali.dev/files/8679c31a-6821-4923-a004-703cee3ad993.jpg', path: '/public/image/aisi/slide2.jpg' },
  { url: 'https://cdn.poehali.dev/files/0104119d-e7cc-4e4a-a186-b744cf42f34c.jpg', path: '/public/image/aisi/slide3.jpg' },
  { url: 'https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png', path: '/public/image/aisi/technical-drawing.png' },
  
  // Частотные преобразователи
  { url: 'https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg', path: '/public/image/frequency-converters/ad30-main.jpg' },
  { url: 'https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png', path: '/public/image/frequency-converters/dimensions.png' },
  
  // Главная страница - слайдшоу героической секции
  { url: 'https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg', path: '/public/image/home/hero-slide1.jpg' },
  { url: 'https://cdn.poehali.dev/files/acf6104e-b8bf-48f0-b09b-02eab5c49057.jpg', path: '/public/image/home/hero-slide2.jpg' },
  { url: 'https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg', path: '/public/image/home/hero-slide3.jpg' },
  
  // Люки
  { url: 'https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg', path: '/public/image/hatches/oval-hatch.jpg' },
  { url: 'https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png', path: '/public/image/hatches/oval-drawing.png' },
  { url: 'https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png', path: '/public/image/hatches/ring-hatch.png' },
  { url: 'https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png', path: '/public/image/hatches/ring-drawing.png' },
  
  // Продукты на главной странице
  { url: 'https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg', path: '/public/image/home/control-cabinets.jpg' },
  { url: 'https://cdn.poehali.dev/files/2154a0f8-3c93-4286-8377-eb8d01f6676f.jpg', path: '/public/image/home/stainless-steel.jpg' },
  { url: 'https://cdn.poehali.dev/files/f90f6220-4e98-4b38-b96f-0eae1fd38318.png', path: '/public/image/home/kip-automation.png' },
];

// Логотипы доверенных компаний (правильные URL из кода)
const companyLogos = [
  { url: 'https://cdn.poehali.dev/files/fcc0a262-51db-4462-a460-1ffa05f9376a.png', path: '/public/image/companies/company1.png' },
  { url: 'https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png', path: '/public/image/companies/company2.png' },
  { url: 'https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png', path: '/public/image/companies/company3.png' },
  { url: 'https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png', path: '/public/image/companies/company4.png' },
  { url: 'https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png', path: '/public/image/companies/company5.png' },
  { url: 'https://cdn.poehali.dev/files/ee317193-f102-47b2-a08e-46e5294fa91b.png', path: '/public/image/companies/company6.png' },
  { url: 'https://cdn.poehali.dev/files/c9d6a645-4f58-485f-8da7-09139a1174f3.png', path: '/public/image/companies/company7.png' },
  { url: 'https://cdn.poehali.dev/files/f5e50fc7-388b-4950-b027-9c5bef63924a.png', path: '/public/image/companies/company8.png' },
  { url: 'https://cdn.poehali.dev/files/be194f41-3731-46d1-a387-7acd0384ab8a.png', path: '/public/image/companies/company9.png' },
  { url: 'https://cdn.poehali.dev/files/dd50023b-6019-4640-8da5-bcd8f9cf083b.png', path: '/public/image/companies/company10.png' }
];

// Изображения проектов из галереи
const projectImages = [
  // Насосная станция поддержания давления
  { url: 'https://cdn.poehali.dev/files/4bafb6c1-883d-4faf-8694-f147cb91846a.jpg', path: '/public/image/projects/pump-station-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/7d3aa69c-61b1-4eb0-b684-08ddfda153a8.jpg', path: '/public/image/projects/pump-station-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/03c39c83-e9f1-4dd4-9526-5041de8cc8fc.jpg', path: '/public/image/projects/pump-station-3.jpg' },
  
  // Кофемашина для производства кофейного концентрата
  { url: 'https://cdn.poehali.dev/files/b92c500e-cb29-4976-b572-444e596324be.jpg', path: '/public/image/projects/coffee-machine-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/c0f109a1-09c6-41ca-8851-0014f64c7eee.jpg', path: '/public/image/projects/coffee-machine-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/289cd412-0572-4a69-8c5d-a2113ca16e49.jpg', path: '/public/image/projects/coffee-machine-3.jpg' },
  
  // Автоматическая CIP станция для 3-х контуров
  { url: 'https://cdn.poehali.dev/files/0fbdd3d7-ddbc-4c1d-ad9e-54c05e4cc478.jpg', path: '/public/image/projects/cip-station-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: '/public/image/projects/cip-station-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/4697ffc1-d1cd-4344-8c7e-05f6b70e71c2.jpg', path: '/public/image/projects/cip-station-3.jpg' },
  
  // Пастеризационно-охладительная установка
  { url: 'https://cdn.poehali.dev/files/a7015e22-3e72-4492-a189-1ed39e18d1aa.jpg', path: '/public/image/projects/pasteurization-main.jpg' },
  { url: 'https://cdn.poehali.dev/files/ef291fbd-2e7b-4590-8840-21e9c55aaa02.jpg', path: '/public/image/projects/pasteurization-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/38b45870-1be3-4651-ad0f-9541dfcbd8f5.jpg', path: '/public/image/projects/pasteurization-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/9058189b-5477-445c-8da9-80ecdcd17610.jpg', path: '/public/image/projects/pasteurization-3.jpg' },
  
  // Ванна длительной пастеризации ВДП-300
  { url: 'https://cdn.poehali.dev/files/8ea1d273-a24f-4e0e-a236-eed623c8a7b9.jpg', path: '/public/image/projects/vdp-bath-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/a0354164-cd50-4936-939c-43e6f1a3345b.jpg', path: '/public/image/projects/vdp-bath-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/36817329-1244-473c-9c52-01128ad75fec.jpg', path: '/public/image/projects/vdp-bath-3.jpg' },
  
  // Индивидуальный тепловой пункт в ЖК г. Казань
  { url: 'https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg', path: '/public/image/projects/heating-point-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/c16de542-05e9-40e5-8181-a8347ca4fb6b.jpg', path: '/public/image/projects/heating-point-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/4565a80a-10b7-4f21-9260-8a439930cc8a.jpg', path: '/public/image/projects/heating-point-3.jpg' },
  
  // Лебёдка для подъёма земельных ископаемых
  { url: 'https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg', path: '/public/image/projects/winch-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/57c189d7-0cf9-4b23-85d9-80fb1375670b.jpg', path: '/public/image/projects/winch-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/c203515f-65e8-406d-95c5-d033c6574ede.jpg', path: '/public/image/projects/winch-3.jpg' },
  
  // Система смазки подшипников мельницы тонкого помола сои
  { url: 'https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg', path: '/public/image/projects/lubrication-system-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/007eff64-e68b-4ce8-a4a8-878768c740c6.jpg', path: '/public/image/projects/lubrication-system-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/b9629c4b-b14d-4007-a2fc-68a96789bb30.jpg', path: '/public/image/projects/lubrication-system-3.jpg' },
  
  // Дозирование удобрений
  { url: 'https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg', path: '/public/image/projects/fertilizer-dosing-1.jpg' },
  { url: 'https://cdn.poehali.dev/files/36f22fdf-fbc1-494f-9f07-81a2659796b0.jpg', path: '/public/image/projects/fertilizer-dosing-2.jpg' },
  { url: 'https://cdn.poehali.dev/files/6b1c3339-329c-48fb-a41c-c823b6a65c3f.jpg', path: '/public/image/projects/fertilizer-dosing-3.jpg' }
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
    return true;
  } catch (error) {
    console.log(`❌ Failed to download ${url}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting comprehensive image download...\n');
  
  const allImages = [...images, ...companyLogos, ...projectImages];
  let successful = 0;
  let failed = 0;
  
  console.log(`📊 Total images to download: ${allImages.length}\n`);
  
  for (const image of allImages) {
    const success = await downloadImage(image.url, `.${image.path}`);
    if (success) {
      successful++;
    } else {
      failed++;
    }
    
    // Небольшая пауза между загрузками
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n📈 Download Statistics:');
  console.log(`✅ Successful downloads: ${successful}`);
  console.log(`❌ Failed downloads: ${failed}`);
  console.log(`📊 Total processed: ${successful + failed}`);
  console.log('\n✨ Image download completed!');
  
  if (successful > 0) {
    console.log('\n📁 Created folder structure:');
    console.log('public/image/');
    console.log('├── logo.png');
    console.log('├── seo/');
    console.log('├── aisi/');
    console.log('├── frequency-converters/');
    console.log('├── home/');
    console.log('├── hatches/');
    console.log('├── companies/');
    console.log('└── projects/');
  }
}

main().catch(console.error);