// Скрипт для организации изображений и подготовки к скачиванию с CDN
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Массив всех изображений с CDN, которые нужно загрузить
const cdnImages = [
  // Основные изображения
  { url: 'https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png', path: 'public/image/logo.png', category: 'core' },
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: 'public/image/seo/og-default.jpg', category: 'seo' },
  
  // AISI корпуса (4 изображения)
  { url: 'https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg', path: 'public/image/aisi/main.jpg', category: 'aisi' },
  { url: 'https://cdn.poehali.dev/files/8679c31a-6821-4923-a004-703cee3ad993.jpg', path: 'public/image/aisi/slide2.jpg', category: 'aisi' },
  { url: 'https://cdn.poehali.dev/files/0104119d-e7cc-4e4a-a186-b744cf42f34c.jpg', path: 'public/image/aisi/slide3.jpg', category: 'aisi' },
  { url: 'https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png', path: 'public/image/aisi/technical-drawing.png', category: 'aisi' },
  
  // Частотные преобразователи (2 изображения)
  { url: 'https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg', path: 'public/image/frequency-converters/ad30-main.jpg', category: 'converters' },
  { url: 'https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png', path: 'public/image/frequency-converters/dimensions.png', category: 'converters' },
  
  // Главная страница - слайдшоу (3 изображения)
  { url: 'https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg', path: 'public/image/home/hero-slide1.jpg', category: 'hero' },
  { url: 'https://cdn.poehali.dev/files/acf6104e-b8bf-48f0-b09b-02eab5c49057.jpg', path: 'public/image/home/hero-slide2.jpg', category: 'hero' },
  { url: 'https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg', path: 'public/image/home/hero-slide3.jpg', category: 'hero' },
  
  // Продукты (3 изображения)
  { url: 'https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg', path: 'public/image/home/control-cabinets.jpg', category: 'products' },
  { url: 'https://cdn.poehali.dev/files/2154a0f8-3c93-4286-8377-eb8d01f6676f.jpg', path: 'public/image/home/stainless-steel.jpg', category: 'products' },
  { url: 'https://cdn.poehali.dev/files/f90f6220-4e98-4b38-b96f-0eae1fd38318.png', path: 'public/image/home/kip-automation.png', category: 'products' },
  
  // Люки (4 изображения)
  { url: 'https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg', path: 'public/image/hatches/oval-hatch.jpg', category: 'hatches' },
  { url: 'https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png', path: 'public/image/hatches/oval-drawing.png', category: 'hatches' },
  { url: 'https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png', path: 'public/image/hatches/ring-hatch.png', category: 'hatches' },
  { url: 'https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png', path: 'public/image/hatches/ring-drawing.png', category: 'hatches' },
  
  // Логотипы компаний (10 изображений)
  { url: 'https://cdn.poehali.dev/files/fcc0a262-51db-4462-a460-1ffa05f9376a.png', path: 'public/image/companies/company1.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png', path: 'public/image/companies/company2.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png', path: 'public/image/companies/company3.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png', path: 'public/image/companies/company4.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png', path: 'public/image/companies/company5.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/ee317193-f102-47b2-a08e-46e5294fa91b.png', path: 'public/image/companies/company6.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/c9d6a645-4f58-485f-8da7-09139a1174f3.png', path: 'public/image/companies/company7.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/f5e50fc7-388b-4950-b027-9c5bef63924a.png', path: 'public/image/companies/company8.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/be194f41-3731-46d1-a387-7acd0384ab8a.png', path: 'public/image/companies/company9.png', category: 'companies' },
  { url: 'https://cdn.poehali.dev/files/dd50023b-6019-4640-8da5-bcd8f9cf083b.png', path: 'public/image/companies/company10.png', category: 'companies' },
  
  // Проекты (27 изображений)
  // Насосная станция
  { url: 'https://cdn.poehali.dev/files/4bafb6c1-883d-4faf-8694-f147cb91846a.jpg', path: 'public/image/projects/pump-station-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/7d3aa69c-61b1-4eb0-b684-08ddfda153a8.jpg', path: 'public/image/projects/pump-station-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/03c39c83-e9f1-4dd4-9526-5041de8cc8fc.jpg', path: 'public/image/projects/pump-station-3.jpg', category: 'projects' },
  
  // Кофемашина
  { url: 'https://cdn.poehali.dev/files/b92c500e-cb29-4976-b572-444e596324be.jpg', path: 'public/image/projects/coffee-machine-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/c0f109a1-09c6-41ca-8851-0014f64c7eee.jpg', path: 'public/image/projects/coffee-machine-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/289cd412-0572-4a69-8c5d-a2113ca16e49.jpg', path: 'public/image/projects/coffee-machine-3.jpg', category: 'projects' },
  
  // CIP станция
  { url: 'https://cdn.poehali.dev/files/0fbdd3d7-ddbc-4c1d-ad9e-54c05e4cc478.jpg', path: 'public/image/projects/cip-station-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: 'public/image/projects/cip-station-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/4697ffc1-d1cd-4344-8c7e-05f6b70e71c2.jpg', path: 'public/image/projects/cip-station-3.jpg', category: 'projects' },
  
  // Пастеризационная установка
  { url: 'https://cdn.poehali.dev/files/a7015e22-3e72-4492-a189-1ed39e18d1aa.jpg', path: 'public/image/projects/pasteurization-main.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/ef291fbd-2e7b-4590-8840-21e9c55aaa02.jpg', path: 'public/image/projects/pasteurization-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/38b45870-1be3-4651-ad0f-9541dfcbd8f5.jpg', path: 'public/image/projects/pasteurization-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/9058189b-5477-445c-8da9-80ecdcd17610.jpg', path: 'public/image/projects/pasteurization-3.jpg', category: 'projects' },
  
  // ВДП ванна
  { url: 'https://cdn.poehali.dev/files/8ea1d273-a24f-4e0e-a236-eed623c8a7b9.jpg', path: 'public/image/projects/vdp-bath-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/a0354164-cd50-4936-939c-43e6f1a3345b.jpg', path: 'public/image/projects/vdp-bath-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/36817329-1244-473c-9c52-01128ad75fec.jpg', path: 'public/image/projects/vdp-bath-3.jpg', category: 'projects' },
  
  // Тепловой пункт
  { url: 'https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg', path: 'public/image/projects/heating-point-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/c16de542-05e9-40e5-8181-a8347ca4fb6b.jpg', path: 'public/image/projects/heating-point-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/4565a80a-10b7-4f21-9260-8a439930cc8a.jpg', path: 'public/image/projects/heating-point-3.jpg', category: 'projects' },
  
  // Лебёдка
  { url: 'https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg', path: 'public/image/projects/winch-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/57c189d7-0cf9-4b23-85d9-80fb1375670b.jpg', path: 'public/image/projects/winch-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/c203515f-65e8-406d-95c5-d033c6574ede.jpg', path: 'public/image/projects/winch-3.jpg', category: 'projects' },
  
  // Система смазки
  { url: 'https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg', path: 'public/image/projects/lubrication-system-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/007eff64-e68b-4ce8-a4a8-878768c740c6.jpg', path: 'public/image/projects/lubrication-system-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/b9629c4b-b14d-4007-a2fc-68a96789bb30.jpg', path: 'public/image/projects/lubrication-system-3.jpg', category: 'projects' },
  
  // Дозирование удобрений
  { url: 'https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg', path: 'public/image/projects/fertilizer-dosing-1.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/36f22fdf-fbc1-494f-9f07-81a2659796b0.jpg', path: 'public/image/projects/fertilizer-dosing-2.jpg', category: 'projects' },
  { url: 'https://cdn.poehali.dev/files/6b1c3339-329c-48fb-a41c-c823b6a65c3f.jpg', path: 'public/image/projects/fertilizer-dosing-3.jpg', category: 'projects' }
];

function createDirectories() {
  const dirs = [
    'public/image/seo',
    'public/image/aisi',
    'public/image/frequency-converters',
    'public/image/home',
    'public/image/hatches',
    'public/image/companies',
    'public/image/projects'
  ];
  
  dirs.forEach(dir => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
      console.log(`📁 Создана папка: ${dir}`);
    }
  });
}

function generateDownloadScript() {
  const bashScript = `#!/bin/bash
# Автоматически сгенерированный скрипт для загрузки всех изображений
echo "🚀 Начинаю загрузку ${cdnImages.length} изображений с CDN..."
echo ""

`;

  const curlCommands = cdnImages.map((img, index) => {
    return `# ${index + 1}/${cdnImages.length} - ${img.category}
curl -s -L "${img.url}" -o "${img.path}" && echo "✅ ${img.path}" || echo "❌ Ошибка: ${img.path}"`;
  }).join('\n\n');

  const fullScript = bashScript + curlCommands + `

echo ""
echo "🎉 Загрузка завершена!"
echo "📊 Статистика:"
echo "   • Основные: 2 изображения"
echo "   • AISI корпуса: 4 изображения"
echo "   • Частотники: 2 изображения"
echo "   • Главная: 6 изображений"
echo "   • Люки: 4 изображения"
echo "   • Компании: 10 изображений"
echo "   • Проекты: 27 изображений"
echo ""
echo "   Всего: ${cdnImages.length} изображений"`;

  writeFileSync('download-all-images.sh', fullScript);
  console.log('✅ Создан скрипт загрузки: download-all-images.sh');
}

function generateImageMap() {
  const imageMap = {};
  cdnImages.forEach(img => {
    if (!imageMap[img.category]) {
      imageMap[img.category] = [];
    }
    imageMap[img.category].push({
      url: img.url,
      path: img.path,
      filename: img.path.split('/').pop()
    });
  });

  writeFileSync('image-map.json', JSON.stringify(imageMap, null, 2));
  console.log('✅ Создана карта изображений: image-map.json');
}

function copyPlaceholders() {
  // Копируем сгенерированные изображения как заполнители
  const placeholders = [
    { from: 'public/img/09d02ac4-7ef6-4f00-baaa-4188d37180cd.jpg', to: 'public/image/logo-placeholder.jpg' },
    { from: 'public/img/bc278f97-ce8a-4633-8328-366f6ac9ef6e.jpg', to: 'public/image/aisi/main-placeholder.jpg' },
    { from: 'public/img/fca6cd34-2ab1-418d-899f-54159616a8ba.jpg', to: 'public/image/frequency-converters/ad30-placeholder.jpg' }
  ];

  placeholders.forEach(({ from, to }) => {
    try {
      if (existsSync(from)) {
        copyFileSync(from, to);
        console.log(`✅ Скопирован заполнитель: ${to}`);
      }
    } catch (error) {
      console.log(`❌ Ошибка копирования ${from}: ${error.message}`);
    }
  });
}

function main() {
  console.log('🔧 Подготовка структуры изображений...\n');
  
  createDirectories();
  console.log('');
  
  generateDownloadScript();
  generateImageMap();
  console.log('');
  
  copyPlaceholders();
  console.log('');
  
  console.log('📋 Сводка:');
  console.log(`📊 Всего изображений для загрузки: ${cdnImages.length}`);
  
  const stats = cdnImages.reduce((acc, img) => {
    acc[img.category] = (acc[img.category] || 0) + 1;
    return acc;
  }, {});
  
  Object.entries(stats).forEach(([category, count]) => {
    console.log(`   • ${category}: ${count} изображений`);
  });
  
  console.log('');
  console.log('🚀 Следующие шаги:');
  console.log('1. Выполните: chmod +x download-all-images.sh');
  console.log('2. Запустите: ./download-all-images.sh');
  console.log('3. Или используйте Node.js: node download-images-full.js');
  
  console.log('');
  console.log('📁 Создана структура папок:');
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

main();