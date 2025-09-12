# Быстрый запуск загрузки изображений

## 🚀 Самый простой способ

Скопируйте и выполните в терминале:

```bash
chmod +x download-basic-images.sh && ./download-basic-images.sh
```

## 📋 Альтернативные команды

### Через bash:
```bash
bash download-basic-images.sh
```

### Прямые curl команды:
```bash
mkdir -p public/image/aisi
curl -L -o "public/image/logo.png" "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png"
curl -L -o "public/image/og-image.jpg" "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg"
curl -L -o "public/image/aisi/main.jpg" "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
```

## ✅ Результат

После выполнения будут созданы файлы:
- `public/image/logo.png`
- `public/image/og-image.jpg` 
- `public/image/aisi/main.jpg`

## 🔍 Проверка

```bash
ls -la public/image/
ls -la public/image/aisi/
```