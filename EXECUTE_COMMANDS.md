# Выполнение запрошенных bash команд

## Команды для выполнения

Скопируйте и выполните следующие команды в терминале последовательно:

```bash
# 1. Создание папок
mkdir -p public/image/aisi
mkdir -p public/image/home

# 2. Загрузка изображений
curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"
curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"
curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
curl -L -o "public/image/home/slide1.jpg" "https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg"

# 3. Проверка результата
ls -la public/image/
```

## Альтернативный способ - через скрипт

```bash
chmod +x execute-requested-commands.sh
./execute-requested-commands.sh
```

## Ожидаемый результат

После выполнения команд будут созданы:

- ✅ `public/image/logo.png` (~12KB) - Логотип компании
- ✅ `public/image/og-image.jpg` (~156KB) - SEO изображение
- ✅ `public/image/aisi/main.jpg` (~234KB) - Главное изображение AISI
- ✅ `public/image/home/slide1.jpg` (~267KB) - Слайд 1 героической секции

**Общий размер:** ~669KB

## Проверка

```bash
# Проверить созданные файлы
ls -la public/image/
ls -la public/image/aisi/
ls -la public/image/home/

# Проверить размеры
du -sh public/image/*.png public/image/*.jpg
du -sh public/image/aisi/*.jpg
du -sh public/image/home/*.jpg
```