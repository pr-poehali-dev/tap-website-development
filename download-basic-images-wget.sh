#!/bin/bash

echo "🚀 Загрузка основных изображений с CDN (wget версия)..."
echo "====================================================="
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
wget -O "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"
if [ $? -eq 0 ]; then
    echo "✅ Логотип загружен: public/image/logo.png"
else
    echo "❌ Ошибка загрузки логотипа"
fi
echo ""

# 2. SEO изображение
echo "2/3 Загружаю SEO изображение..."
wget -O "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"
if [ $? -eq 0 ]; then
    echo "✅ SEO изображение загружено: public/image/og-image.jpg"
else
    echo "❌ Ошибка загрузки SEO изображения"
fi
echo ""

# 3. Главное изображение AISI
echo "3/3 Загружаю главное изображение AISI..."
wget -O "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
if [ $? -eq 0 ]; then
    echo "✅ AISI изображение загружено: public/image/aisi/main.jpg"
else
    echo "❌ Ошибка загрузки AISI изображения"
fi
echo ""

echo "====================================================="
echo "🎉 Загрузка завершена с помощью wget!"