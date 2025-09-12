#!/bin/bash

echo "🚀 Копирование сгенерированных изображений в правильную структуру папок..."
echo "======================================================================"
echo ""

# Проверяем существование исходных файлов
echo "📋 Проверяю исходные файлы в public/img/:"

files_to_copy=(
    "370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg"
    "218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg"
    "12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg"
)

for file in "${files_to_copy[@]}"; do
    if [ -f "public/img/$file" ]; then
        echo "✅ $file найден"
        ls -lh "public/img/$file" | awk '{print "   Размер:", $5}'
    else
        echo "❌ $file НЕ найден!"
    fi
done

echo ""

# Создаем необходимые папки (если их нет)
echo "📁 Создаю необходимые папки..."
mkdir -p public/image/aisi
mkdir -p public/image/frequency-converters
echo "✅ Папки созданы"
echo ""

# 1. Копируем логотип компании
echo "1️⃣ Копирую логотип компании:"
echo "   Источник: public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg"
echo "   Назначение: public/image/logo.png"

if [ -f "public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg" ]; then
    cp "public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg" "public/image/logo.png"
    if [ $? -eq 0 ]; then
        echo "   ✅ Логотип скопирован успешно"
        ls -lh "public/image/logo.png" | awk '{print "   Размер:", $5}'
    else
        echo "   ❌ Ошибка копирования логотипа"
    fi
else
    echo "   ❌ Исходный файл не найден!"
fi
echo ""

# 2. Копируем изображение AISI корпусов
echo "2️⃣ Копирую изображение AISI корпусов:"
echo "   Источник: public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg"
echo "   Назначение: public/image/aisi/main.jpg"

if [ -f "public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg" ]; then
    cp "public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg" "public/image/aisi/main.jpg"
    if [ $? -eq 0 ]; then
        echo "   ✅ AISI изображение скопировано успешно"
        ls -lh "public/image/aisi/main.jpg" | awk '{print "   Размер:", $5}'
    else
        echo "   ❌ Ошибка копирования AISI изображения"
    fi
else
    echo "   ❌ Исходный файл не найден!"
fi
echo ""

# 3. Копируем изображение частотных преобразователей
echo "3️⃣ Копирую изображение частотных преобразователей:"
echo "   Источник: public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg"
echo "   Назначение: public/image/frequency-converters/ad30.jpg"

if [ -f "public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg" ]; then
    cp "public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg" "public/image/frequency-converters/ad30.jpg"
    if [ $? -eq 0 ]; then
        echo "   ✅ Частотный преобразователь скопирован успешно"
        ls -lh "public/image/frequency-converters/ad30.jpg" | awk '{print "   Размер:", $5}'
    else
        echo "   ❌ Ошибка копирования изображения частотного преобразователя"
    fi
else
    echo "   ❌ Исходный файл не найден!"
fi
echo ""

# Итоги копирования
echo "======================================================================"
echo "📊 ИТОГИ КОПИРОВАНИЯ:"
echo ""

copied_count=0
total_size=0

if [ -f "public/image/logo.png" ]; then
    copied_count=$((copied_count + 1))
    size=$(stat -f%z "public/image/logo.png" 2>/dev/null || stat -c%s "public/image/logo.png" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ public/image/logo.png"
fi

if [ -f "public/image/aisi/main.jpg" ]; then
    copied_count=$((copied_count + 1))
    size=$(stat -f%z "public/image/aisi/main.jpg" 2>/dev/null || stat -c%s "public/image/aisi/main.jpg" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ public/image/aisi/main.jpg"
fi

if [ -f "public/image/frequency-converters/ad30.jpg" ]; then
    copied_count=$((copied_count + 1))
    size=$(stat -f%z "public/image/frequency-converters/ad30.jpg" 2>/dev/null || stat -c%s "public/image/frequency-converters/ad30.jpg" 2>/dev/null)
    total_size=$((total_size + size))
    echo "✅ public/image/frequency-converters/ad30.jpg"
fi

echo ""
echo "📈 Успешно скопировано: $copied_count/3 файлов"

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
if [ $copied_count -eq 3 ]; then
    echo "🎉 Все изображения успешно скопированы!"
else
    echo "⚠️ Скопированы не все изображения. Проверьте ошибки выше."
fi

echo ""
echo "📁 Итоговая структура файлов:"
echo "public/image/"
if [ -f "public/image/logo.png" ]; then
    echo "├── logo.png              (Логотип компании)"
fi
if [ -f "public/image/aisi/main.jpg" ]; then
    echo "├── aisi/"
    echo "│   └── main.jpg          (Корпуса AISI)"
fi
if [ -f "public/image/frequency-converters/ad30.jpg" ]; then
    echo "└── frequency-converters/"
    echo "    └── ad30.jpg          (Частотные преобразователи)"
fi

echo ""
echo "📋 Проверка результата:"
echo "ls -la public/image/"
ls -la public/image/ 2>/dev/null
echo ""
echo "ls -la public/image/aisi/"
ls -la public/image/aisi/ 2>/dev/null
echo ""
echo "ls -la public/image/frequency-converters/"
ls -la public/image/frequency-converters/ 2>/dev/null

echo ""
echo "✨ Копирование завершено!"