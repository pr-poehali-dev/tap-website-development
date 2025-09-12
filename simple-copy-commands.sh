#!/bin/bash

echo "Простые команды для копирования:"
echo ""

echo "# Создание папок"
echo "mkdir -p public/image/aisi"
echo "mkdir -p public/image/frequency-converters"
echo ""

echo "# Копирование файлов"
echo "cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png"
echo "cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg"  
echo "cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg"
echo ""

echo "# Проверка результата"
echo "ls -la public/image/"
echo "ls -la public/image/aisi/"
echo "ls -la public/image/frequency-converters/"

echo ""
echo "Выполняю копирование..."

# Создаем папки
mkdir -p public/image/aisi
mkdir -p public/image/frequency-converters

# Копируем файлы
cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png
cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg
cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg

echo "Готово!"