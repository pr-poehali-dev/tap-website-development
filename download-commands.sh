#!/bin/bash

# Простая версия с прямыми командами curl
echo "Создаю папки..."
mkdir -p public/image/aisi

echo "Загружаю изображения..."

# Команды для копирования в терминал:
echo "Выполните следующие команды в терминале:"
echo ""
echo "# 1. Логотип компании"
echo 'curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"'
echo ""
echo "# 2. SEO изображение"  
echo 'curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"'
echo ""
echo "# 3. Главное изображение AISI"
echo 'curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"'
echo ""

# Выполняем команды
echo "Выполняю загрузку..."

curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png" && echo "✅ Логотип загружен"

curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg" && echo "✅ SEO изображение загружено"

curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg" && echo "✅ AISI изображение загружено"

echo "Готово!"