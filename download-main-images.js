#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Основные изображения для загрузки
const mainImages = [
  // Логотип компании
  { url: 'https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png', path: 'public/image/logo.png' },
  
  // SEO изображение
  { url: 'https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg', path: 'public/image/og-image.jpg' },
  
  // Страница AISI
  { url: 'https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg', path: 'public/image/aisi/main.jpg' },
  { url: 'https://cdn.poehali.dev/files/8679c31a-6821-4923-a004-703cee3ad993.jpg', path: 'public/image/aisi/slide2.jpg' },
  { url: 'https://cdn.poehali.dev/files/0104119d-e7cc-4e4a-a186-b744cf42f34c.jpg', path: 'public/image/aisi/slide3.jpg' },
  { url: 'https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png', path: 'public/image/aisi/drawing.png' },
  
  // Частотные преобразователи
  { url: 'https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg', path: 'public/image/frequency-converters/ad30.jpg' },
  { url: 'https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png', path: 'public/image/frequency-converters/dimensions.png' },
  
  // Главная страница - слайдшоу
  { url: 'https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg', path: 'public/image/home/slide1.jpg' },
  { url: 'https://cdn.poehali.dev/files/acf6104e-b8bf-48f0-b09b-02eab5c49057.jpg', path: 'public/image/home/slide2.jpg' },
  { url: 'https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg', path: 'public/image/home/slide3.jpg' },
  
  // Продукты на главной
  { url: 'https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg', path: 'public/image/home/cabinets.jpg' },
  { url: 'https://cdn.poehali.dev/files/2154a0f8-3c93-4286-8377-eb8d01f6676f.jpg', path: 'public/image/home/stainless.jpg' },
  { url: 'https://cdn.poehali.dev/files/f90f6220-4e98-4b38-b96f-0eae1fd38318.png', path: 'public/image/home/kipsia.png' },
  
  // Люки
  { url: 'https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg', path: 'public/image/hatches/oval.jpg' },
  { url: 'https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png', path: 'public/image/hatches/oval-drawing.png' },
  { url: 'https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png', path: 'public/image/hatches/ring.png' },
  { url: 'https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png', path: 'public/image/hatches/ring-drawing.png' },
];

// Логотипы компаний
const companyLogos = [
  { url: 'https://cdn.poehali.dev/files/fcc0a262-51db-4462-a460-1ffa05f9376a.png', path: 'public/image/companies/logo1.png' },
  { url: 'https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png', path: 'public/image/companies/logo2.png' },
  { url: 'https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png', path: 'public/image/companies/logo3.png' },
  { url: 'https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png', path: 'public/image/companies/logo4.png' },
  { url: 'https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png', path: 'public/image/companies/logo5.png' },
  { url: 'https://cdn.poehali.dev/files/ee317193-f102-47b2-a08e-46e5294fa91b.png', path: 'public/image/companies/logo6.png' },
  { url: 'https://cdn.poehali.dev/files/c9d6a645-4f58-485f-8da7-09139a1174f3.png', path: 'public/image/companies/logo7.png' },
  { url: 'https://cdn.poehali.dev/files/f5e50fc7-388b-4950-b027-9c5bef63924a.png', path: 'public/image/companies/logo8.png' },
  { url: 'https://cdn.poehali.dev/files/be194f41-3731-46d1-a387-7acd0384ab8a.png', path: 'public/image/companies/logo9.png' },
  { url: 'https://cdn.poehali.dev/files/dd50023b-6019-4640-8da5-bcd8f9cf083b.png', path: 'public/image/companies/logo10.png' },
];

async function downloadImage(url, filepath) {
  try {
    console.log(`📥 Загружаю: ${filepath}...`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const buffer = await response.arrayBuffer();
    const dir = dirname(filepath);
    
    // Создаём директорию если её нет
    mkdirSync(dir, { recursive: true });
    
    // Сохраняем файл
    writeFileSync(filepath, new Uint8Array(buffer));
    
    console.log(`✅ Загружено: ${filepath}`);
    return true;
  } catch (error) {
    console.log(`❌ Ошибка загрузки ${filepath}: ${error.message}`);
    return false;
  }
}

async function downloadWithDelay(images, delayMs = 100) {
  let successful = 0;
  let failed = 0;
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const success = await downloadImage(image.url, image.path);
    
    if (success) {
      successful++;
    } else {
      failed++;
    }
    
    // Небольшая пауза между запросами
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  
  return { successful, failed };
}

async function main() {
  console.log('🚀 Начинаю загрузку основных изображений...\n');
  
  // Загружаем основные изображения
  console.log('📂 Загружаю основные изображения сайта...');
  const mainResults = await downloadWithDelay(mainImages, 200);
  
  console.log('\n📂 Загружаю логотипы компаний...');
  const logoResults = await downloadWithDelay(companyLogos, 150);
  
  const totalSuccessful = mainResults.successful + logoResults.successful;
  const totalFailed = mainResults.failed + logoResults.failed;
  const totalImages = mainImages.length + companyLogos.length;
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 ИТОГИ ЗАГРУЗКИ:');
  console.log(`✅ Успешно загружено: ${totalSuccessful}/${totalImages} изображений`);
  console.log(`❌ Ошибки загрузки: ${totalFailed}/${totalImages} изображений`);
  console.log('='.repeat(50));
  
  if (totalSuccessful === totalImages) {
    console.log('🎉 Все изображения успешно загружены!');
  } else if (totalSuccessful > 0) {
    console.log('⚠️  Загружена часть изображений. Проверьте ошибки выше.');
  } else {
    console.log('💥 Не удалось загрузить ни одного изображения!');
  }
}

main().catch(error => {
  console.error('💥 Критическая ошибка:', error);
  process.exit(1);
});