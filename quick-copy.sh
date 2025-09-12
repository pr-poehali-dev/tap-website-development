#!/bin/bash
# Быстрое копирование изображений

echo "🚀 Быстрое копирование сгенерированных изображений..."

# Создаем папки
mkdir -p public/image/aisi public/image/frequency-converters

# Копируем файлы
cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png && echo "✅ Логотип скопирован"
cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg && echo "✅ AISI изображение скопировано"
cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg && echo "✅ Частотный преобразователь скопирован"

echo "🎉 Копирование завершено!"
echo ""
echo "Проверка:"
ls -la public/image/logo.png 2>/dev/null && echo "  ✅ logo.png"
ls -la public/image/aisi/main.jpg 2>/dev/null && echo "  ✅ aisi/main.jpg"  
ls -la public/image/frequency-converters/ad30.jpg 2>/dev/null && echo "  ✅ frequency-converters/ad30.jpg"