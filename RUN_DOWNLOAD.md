# Выполнение скрипта загрузки изображений

## Команда для запуска

Откройте терминал в корневой директории проекта и выполните:

```bash
node download-images-full.js
```

## Ожидаемый вывод

Скрипт выведет примерно следующее:

```
🚀 Starting comprehensive image download...

📊 Total images to download: 48

[1/48] Processing: /public/image/logo.png
   🔄 Fetching: https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png
   ✅ Saved: ./public/image/logo.png (12KB)

[2/48] Processing: /public/image/seo/og-default.jpg
   🔄 Fetching: https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg
   ✅ Saved: ./public/image/seo/og-default.jpg (156KB)

[3/48] Processing: /public/image/aisi/main.jpg
   🔄 Fetching: https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg
   ✅ Saved: ./public/image/aisi/main.jpg (234KB)

...продолжится загрузка всех 48 изображений...

📈 Progress: 10/48 processed
✅ Success: 10, ❌ Failed: 0

...

📈 Final Download Statistics:
✅ Successful downloads: 48
❌ Failed downloads: 0
📊 Total processed: 48
📊 Success rate: 100.0%

✨ Image download completed!

📁 Created folder structure:
public/image/
├── logo.png
├── seo/
│   └── og-default.jpg
├── aisi/
│   ├── main.jpg
│   ├── slide2.jpg
│   ├── slide3.jpg
│   └── technical-drawing.png
├── frequency-converters/
│   ├── ad30-main.jpg
│   └── dimensions.png
├── home/
│   ├── hero-slide1.jpg
│   ├── hero-slide2.jpg
│   ├── hero-slide3.jpg
│   ├── control-cabinets.jpg
│   ├── stainless-steel.jpg
│   └── kip-automation.png
├── hatches/
│   ├── oval-hatch.jpg
│   ├── oval-drawing.png
│   ├── ring-hatch.png
│   └── ring-drawing.png
├── companies/
│   ├── company1.png ... company10.png
└── projects/
    └── [30 project images]
```

## После выполнения

После успешного выполнения скрипта:

1. В папке `public/image/` появятся все 48 изображений
2. Общий размер файлов составит ~15-20 МБ
3. Все изображения будут доступны локально для вашего сайта

## Альтернативные команды

Если основная команда не работает, попробуйте:

```bash
# Через npm
npm run node download-images-full.js

# Через bun (если установлен)
bun run download-images-full.js

# Windows
download-images.bat

# Linux/macOS
chmod +x download-images.sh
./download-images.sh
```

## Проверка результата

После выполнения проверьте:

```bash
# Посмотреть структуру папок
ls -la public/image/

# Подсчитать количество файлов
find public/image/ -type f | wc -l

# Посмотреть размер папки
du -sh public/image/
```

Должно быть 48 файлов + несколько .gitkeep файлов.