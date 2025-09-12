#!/bin/bash

echo "🚀 Выполнение запрошенных bash команд..."
echo "====================================="
echo ""

# Команда 1: Создание папки aisi
echo "$ mkdir -p public/image/aisi"
mkdir -p public/image/aisi
echo "✅ Папка public/image/aisi готова"
echo ""

# Команда 2: Создание папки frequency-converters
echo "$ mkdir -p public/image/frequency-converters" 
mkdir -p public/image/frequency-converters
echo "✅ Папка public/image/frequency-converters готова"
echo ""

# Команда 3: Копирование логотипа
echo "$ cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png"
if [ -f "public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg" ]; then
    cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png
    if [ $? -eq 0 ]; then
        echo "✅ Логотип скопирован в public/image/logo.png"
    else
        echo "❌ Ошибка копирования логотипа"
    fi
else
    echo "❌ Исходный файл не найден: public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg"
fi
echo ""

# Команда 4: Копирование AISI изображения
echo "$ cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg"
if [ -f "public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg" ]; then
    cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg
    if [ $? -eq 0 ]; then
        echo "✅ AISI изображение скопировано в public/image/aisi/main.jpg"
    else
        echo "❌ Ошибка копирования AISI изображения"
    fi
else
    echo "❌ Исходный файл не найден: public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg"
fi
echo ""

# Команда 5: Копирование изображения частотного преобразователя
echo "$ cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg"
if [ -f "public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg" ]; then
    cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg
    if [ $? -eq 0 ]; then
        echo "✅ Частотный преобразователь скопирован в public/image/frequency-converters/ad30.jpg"
    else
        echo "❌ Ошибка копирования изображения частотного преобразователя"
    fi
else
    echo "❌ Исходный файл не найден: public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg"
fi
echo ""

echo "====================================="
echo "📋 ПРОВЕРКА РЕЗУЛЬТАТОВ:"
echo ""

# Команда 6: Список файлов в public/image/
echo "$ ls -la public/image/"
ls -la public/image/
echo ""

# Команда 7: Список файлов в public/image/aisi/
echo "$ ls -la public/image/aisi/"
ls -la public/image/aisi/
echo ""

# Команда 8: Список файлов в public/image/frequency-converters/
echo "$ ls -la public/image/frequency-converters/"
ls -la public/image/frequency-converters/
echo ""

# Итоговая статистика
echo "====================================="
echo "📊 ИТОГИ КОПИРОВАНИЯ:"

copied_files=0
if [ -f "public/image/logo.png" ]; then
    echo "✅ public/image/logo.png"
    copied_files=$((copied_files + 1))
fi

if [ -f "public/image/aisi/main.jpg" ]; then
    echo "✅ public/image/aisi/main.jpg"
    copied_files=$((copied_files + 1))
fi

if [ -f "public/image/frequency-converters/ad30.jpg" ]; then
    echo "✅ public/image/frequency-converters/ad30.jpg" 
    copied_files=$((copied_files + 1))
fi

echo ""
echo "📈 Успешно скопировано: $copied_files/3 файлов"

if [ $copied_files -eq 3 ]; then
    echo "🎉 Все файлы успешно скопированы!"
else
    echo "⚠️ Не все файлы были скопированы. Проверьте ошибки выше."
fi

echo ""
echo "✨ Выполнение команд завершено!"