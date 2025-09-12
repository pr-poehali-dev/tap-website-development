// Простой скрипт загрузки с использованием встроенного fetch
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';

const images = [
  // Критически важные изображения для тестирования
  { url: 'https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png', path: 'public/image/logo.png', name: 'Логотип' },
  { url: 'https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg', path: 'public/image/aisi/main.jpg', name: 'AISI главное' },
  { url: 'https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg', path: 'public/image/frequency-converters/ad30-main.jpg', name: 'AD30 преобразователь' },
];

async function downloadImage(url, filepath, name) {
  try {
    console.log(`📥 Загружаю: ${name}...`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    
    const dir = dirname(filepath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    
    writeFileSync(filepath, buffer);
    console.log(`✅ Успешно загружен: ${name} -> ${filepath}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Ошибка загрузки ${name}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Начинаю загрузку ключевых изображений...\n');
  
  let success = 0;
  let failed = 0;
  
  for (const img of images) {
    const result = await downloadImage(img.url, img.path, img.name);
    if (result) {
      success++;
    } else {
      failed++;
    }
    
    // Небольшая пауза между запросами
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n📈 Результаты:');
  console.log(`✅ Успешно: ${success}`);
  console.log(`❌ Неудачно: ${failed}`);
  console.log(`📊 Всего: ${success + failed}`);
}

main().catch(console.error);