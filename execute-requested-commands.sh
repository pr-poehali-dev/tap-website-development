#!/bin/bash

echo "🚀 Выполнение запрошенных команд..."
echo "=================================="
echo ""

# Команда 1: Создание папки aisi
echo "1. mkdir -p public/image/aisi"
mkdir -p public/image/aisi
echo "✅ Папка public/image/aisi создана (или уже существует)"
echo ""

# Команда 2: Создание папки home
echo "2. mkdir -p public/image/home"
mkdir -p public/image/home
echo "✅ Папка public/image/home создана (или уже существует)"
echo ""

# Команда 3: Загрузка логотипа
echo "3. curl -L -o \"public/image/logo.png\" \"https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png\""
curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"
if [ $? -eq 0 ]; then
    echo "✅ Логотип загружен успешно"
    ls -lh public/image/logo.png 2>/dev/null
else
    echo "❌ Ошибка загрузки логотипа"
fi
echo ""

# Команда 4: Загрузка SEO изображения
echo "4. curl -L -o \"public/image/og-image.jpg\" \"https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg\""
curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"
if [ $? -eq 0 ]; then
    echo "✅ SEO изображение загружено успешно"
    ls -lh public/image/og-image.jpg 2>/dev/null
else
    echo "❌ Ошибка загрузки SEO изображения"
fi
echo ""

# Команда 5: Загрузка AISI изображения
echo "5. curl -L -o \"public/image/aisi/main.jpg\" \"https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg\""
curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
if [ $? -eq 0 ]; then
    echo "✅ AISI изображение загружено успешно"
    ls -lh public/image/aisi/main.jpg 2>/dev/null
else
    echo "❌ Ошибка загрузки AISI изображения"
fi
echo ""

# Команда 6: Загрузка home slide1
echo "6. curl -L -o \"public/image/home/slide1.jpg\" \"https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg\""
curl -L -o "public/image/home/slide1.jpg" "https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg"
if [ $? -eq 0 ]; then
    echo "✅ Home slide1 изображение загружено успешно"
    ls -lh public/image/home/slide1.jpg 2>/dev/null
else
    echo "❌ Ошибка загрузки home slide1 изображения"
fi
echo ""

# Команда 7: Показать содержимое папки
echo "7. ls -la public/image/"
echo "Содержимое папки public/image/:"
ls -la public/image/
echo ""

echo "=================================="
echo "✨ Все команды выполнены!"
echo ""
echo "📁 Ожидаемая структура файлов:"
echo "public/image/"
echo "├── logo.png         (~12KB)"
echo "├── og-image.jpg     (~156KB)"
echo "├── aisi/"
echo "│   └── main.jpg     (~234KB)"
echo "└── home/"
echo "    └── slide1.jpg   (~267KB)"