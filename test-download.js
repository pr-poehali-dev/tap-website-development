// Тестовый скрипт для загрузки одного изображения
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import fetch from 'node-fetch';

async function downloadImage(url, filepath) {
  try {
    console.log(`Downloading ${url}...`);
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

// Тест загрузки логотипа
downloadImage(
  'https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png', 
  './public/image/logo.png'
).then(success => {
  if (success) {
    console.log('🎉 Test successful! Image download works.');
  } else {
    console.log('❌ Test failed.');
  }
});