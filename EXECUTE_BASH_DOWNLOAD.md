# Выполнение bash скриптов для загрузки изображений

## Созданные скрипты

1. **`download-basic-images.sh`** - Полнофункциональный скрипт с curl
2. **`download-basic-images-wget.sh`** - Альтернативная версия с wget  
3. **`download-commands.sh`** - Простая версия с прямыми командами

## Способ 1: Выполнение основного скрипта (Рекомендуется)

```bash
# Сделать скрипт исполняемым
chmod +x download-basic-images.sh

# Выполнить скрипт
./download-basic-images.sh
```

## Способ 2: Выполнение через bash

```bash
bash download-basic-images.sh
```

## Способ 3: Альтернатива с wget

```bash
chmod +x download-basic-images-wget.sh
./download-basic-images-wget.sh
```

## Способ 4: Прямые команды curl

Выполните каждую команду по отдельности в терминале:

```bash
# Создать папки
mkdir -p public/image/aisi

# 1. Загрузить логотип
curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"

# 2. Загрузить SEO изображение
curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"

# 3. Загрузить AISI изображение
curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
```

## Ожидаемый вывод основного скрипта

```
🚀 Загрузка основных изображений с CDN...
==========================================

📁 Создаю необходимые папки...
✅ Папки созданы

📥 Загружаю основные изображения:

1/3 Загружаю логотип...
✅ Логотип загружен: public/image/logo.png
   Размер: 12K

2/3 Загружаю SEO изображение...
✅ SEO изображение загружено: public/image/og-image.jpg
   Размер: 156K

3/3 Загружаю главное изображение AISI...
✅ AISI изображение загружено: public/image/aisi/main.jpg
   Размер: 234K

==========================================
📊 ИТОГИ ЗАГРУЗКИ:

✅ logo.png
✅ og-image.jpg
✅ aisi/main.jpg

📈 Успешно загружено: 3/3 файлов
💾 Общий размер: 1 МБ

🎉 Все изображения успешно загружены!

📁 Структура созданных файлов:
public/image/
├── logo.png
├── og-image.jpg
└── aisi/
    └── main.jpg

✨ Загрузка завершена!
```

## Проверка результата

После выполнения любого скрипта проверьте результат:

```bash
# Посмотреть файлы
ls -la public/image/
ls -la public/image/aisi/

# Проверить размеры
du -sh public/image/*

# Подсчитать файлы
find public/image/ -name "*.png" -o -name "*.jpg" | wc -l
```

Должно быть создано 3 файла:
- ✅ `public/image/logo.png` (~12KB)
- ✅ `public/image/og-image.jpg` (~156KB)  
- ✅ `public/image/aisi/main.jpg` (~234KB)

## Устранение проблем

Если скрипт не выполняется:

1. **Проблемы с правами доступа:**
   ```bash
   chmod +x download-basic-images.sh
   ```

2. **curl не установлен:**
   ```bash
   # Ubuntu/Debian
   sudo apt install curl
   
   # macOS (через Homebrew)
   brew install curl
   ```

3. **Проблемы с интернет соединением:**
   - Проверьте подключение к интернету
   - Попробуйте открыть URL в браузере
   - Используйте VPN если CDN заблокирован

4. **Ошибки создания папок:**
   ```bash
   # Создать папки вручную
   mkdir -p public/image/aisi
   ```

## Файлы для загрузки

1. **Логотип**: https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png
2. **SEO изображение**: https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg
3. **AISI главное**: https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg