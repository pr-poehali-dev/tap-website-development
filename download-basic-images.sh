#!/bin/bash

echo "🚀 Загрузка основных изображений с CDN..."
echo "=========================================="
echo ""

# Создаем необходимые папки
echo "📁 Создаю необходимые папки..."
mkdir -p public/image/aisi
echo "✅ Папки созданы"
echo ""

# Загружаем основные изображения
echo "📥 Загружаю основные изображения:"
echo ""

# 1. Логотип компании
echo "1/3 Загружаю логотип..."
curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"
if [ $? -eq 0 ]; then
    echo "✅ Логотип загружен: public/image/logo.png"
    ls -lh public/image/logo.png | awk '{print "   Размер:", $5}'
else
    echo "❌ Ошибка загрузки логотипа"
fi
echo ""

# 2. SEO изображение
echo "2/3 Загружаю SEO изображение..."
curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"
if [ $? -eq 0 ]; then
    echo "✅ SEO изображение загружено: public/image/og-image.jpg"
    ls -lh public/image/og-image.jpg | awk '{print "   Размер:", $5}'
else
    echo "❌ Ошибка загрузки SEO изображения"
fi
echo ""

# 3. Главное изображение AISI
echo "3/3 Загружаю главное изображение AISI..."
curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
if [ $? -eq 0 ]; then
    echo "✅ AISI изображение загружено: public/image/aisi/main.jpg"
    ls -lh public/image/aisi/main.jpg | awk '{print "   Размер:", $5}'
else
    echo "❌ Ошибка загрузки AISI изображения"
fi
echo ""

echo "=========================================="
echo "📊 ИТОГИ ЗАГРУЗКИ:"
echo ""

# Подсчитаем загруженные файлы
count=0
total_size=0

if [ -f "public/image/logo.png" ]; then
    count=$((count + 1))
    size=$(stat -f%z "public/image/logo.png" 2>/dev/null || stat -c%s "public/image/logo.png" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ logo.png"
fi

if [ -f "public/image/og-image.jpg" ]; then
    count=$((count + 1))
    size=$(stat -f%z "public/image/og-image.jpg" 2>/dev/null || stat -c%s "public/image/og-image.jpg" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ og-image.jpg"
fi

if [ -f "public/image/aisi/main.jpg" ]; then
    count=$((count + 1))
    size=$(stat -f%z "public/image/aisi/main.jpg" 2>/dev/null || stat -c%s "public/image/aisi/main.jpg" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ aisi/main.jpg"
fi

echo ""
echo "📈 Успешно загружено: $count/3 файлов"

if [ $total_size -gt 0 ]; then
    total_mb=$((total_size / 1024 / 1024))
    total_kb=$((total_size / 1024))
    if [ $total_mb -gt 0 ]; then
        echo "💾 Общий размер: ${total_mb} МБ"
    else
        echo "💾 Общий размер: ${total_kb} КБ"
    fi
fi

echo ""
if [ $count -eq 3 ]; then
    echo "🎉 Все изображения успешно загружены!"
else
    echo "⚠️ Загружены не все изображения. Проверьте интернет соединение."
fi

echo ""
echo "📁 Структура созданных файлов:"
echo "public/image/"
if [ -f "public/image/logo.png" ]; then
    echo "├── logo.png"
fi
if [ -f "public/image/og-image.jpg" ]; then
    echo "├── og-image.jpg"
fi
if [ -f "public/image/aisi/main.jpg" ]; then
    echo "└── aisi/"
    echo "    └── main.jpg"
fi

echo ""
echo "✨ Загрузка завершена!"