#!/bin/bash

# Скрипт для загрузки всех изображений с CDN
echo "🚀 Начинаю загрузку изображений с CDN..."

# Создаем недостающие папки
mkdir -p public/image/seo

# Основные изображения
echo "📥 Загружаю основные изображения..."

# Логотип
curl -s -L "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png" -o "public/image/logo.png" && echo "✅ Загружен логотип"

# SEO изображение
curl -s -L "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg" -o "public/image/seo/og-default.jpg" && echo "✅ Загружено SEO изображение"

# Страница AISI
echo "📥 Загружаю изображения AISI корпусов..."
curl -s -L "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg" -o "public/image/aisi/main.jpg" && echo "✅ AISI главное фото"
curl -s -L "https://cdn.poehali.dev/files/8679c31a-6821-4923-a004-703cee3ad993.jpg" -o "public/image/aisi/slide2.jpg" && echo "✅ AISI слайд 2"
curl -s -L "https://cdn.poehali.dev/files/0104119d-e7cc-4e4a-a186-b744cf42f34c.jpg" -o "public/image/aisi/slide3.jpg" && echo "✅ AISI слайд 3"
curl -s -L "https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png" -o "public/image/aisi/technical-drawing.png" && echo "✅ AISI технический чертеж"

# Частотные преобразователи
echo "📥 Загружаю изображения частотных преобразователей..."
curl -s -L "https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg" -o "public/image/frequency-converters/ad30-main.jpg" && echo "✅ AD30 главное фото"
curl -s -L "https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png" -o "public/image/frequency-converters/dimensions.png" && echo "✅ AD30 габариты"

# Главная страница
echo "📥 Загружаю изображения главной страницы..."
curl -s -L "https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg" -o "public/image/home/hero-slide1.jpg" && echo "✅ Героический слайд 1"
curl -s -L "https://cdn.poehali.dev/files/acf6104e-b8bf-48f0-b09b-02eab5c49057.jpg" -o "public/image/home/hero-slide2.jpg" && echo "✅ Героический слайд 2"
curl -s -L "https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg" -o "public/image/home/hero-slide3.jpg" && echo "✅ Героический слайд 3"
curl -s -L "https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg" -o "public/image/home/control-cabinets.jpg" && echo "✅ Шкафы управления"
curl -s -L "https://cdn.poehali.dev/files/2154a0f8-3c93-4286-8377-eb8d01f6676f.jpg" -o "public/image/home/stainless-steel.jpg" && echo "✅ Нержавеющая сталь"
curl -s -L "https://cdn.poehali.dev/files/f90f6220-4e98-4b38-b96f-0eae1fd38318.png" -o "public/image/home/kip-automation.png" && echo "✅ КИПиА"

# Люки
echo "📥 Загружаю изображения люков..."
curl -s -L "https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg" -o "public/image/hatches/oval-hatch.jpg" && echo "✅ Овальный люк"
curl -s -L "https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png" -o "public/image/hatches/oval-drawing.png" && echo "✅ Чертеж овального люка"
curl -s -L "https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png" -o "public/image/hatches/ring-hatch.png" && echo "✅ Кольцевой люк"
curl -s -L "https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png" -o "public/image/hatches/ring-drawing.png" && echo "✅ Чертеж кольцевого люка"

# Логотипы компаний
echo "📥 Загружаю логотипы доверенных компаний..."
curl -s -L "https://cdn.poehali.dev/files/fcc0a262-51db-4462-a460-1ffa05f9376a.png" -o "public/image/companies/company1.png" && echo "✅ Компания 1"
curl -s -L "https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png" -o "public/image/companies/company2.png" && echo "✅ Компания 2"
curl -s -L "https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png" -o "public/image/companies/company3.png" && echo "✅ Компания 3"
curl -s -L "https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png" -o "public/image/companies/company4.png" && echo "✅ Компания 4"
curl -s -L "https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png" -o "public/image/companies/company5.png" && echo "✅ Компания 5"
curl -s -L "https://cdn.poehali.dev/files/ee317193-f102-47b2-a08e-46e5294fa91b.png" -o "public/image/companies/company6.png" && echo "✅ Компания 6"
curl -s -L "https://cdn.poehali.dev/files/c9d6a645-4f58-485f-8da7-09139a1174f3.png" -o "public/image/companies/company7.png" && echo "✅ Компания 7"
curl -s -L "https://cdn.poehali.dev/files/f5e50fc7-388b-4950-b027-9c5bef63924a.png" -o "public/image/companies/company8.png" && echo "✅ Компания 8"
curl -s -L "https://cdn.poehali.dev/files/be194f41-3731-46d1-a387-7acd0384ab8a.png" -o "public/image/companies/company9.png" && echo "✅ Компания 9"
curl -s -L "https://cdn.poehali.dev/files/dd50023b-6019-4640-8da5-bcd8f9cf083b.png" -o "public/image/companies/company10.png" && echo "✅ Компания 10"

echo "⏳ Загружаю изображения проектов (это может занять время)..."

# Проекты - Насосная станция
curl -s -L "https://cdn.poehali.dev/files/4bafb6c1-883d-4faf-8694-f147cb91846a.jpg" -o "public/image/projects/pump-station-1.jpg" && echo "✅ Насосная станция 1"
curl -s -L "https://cdn.poehali.dev/files/7d3aa69c-61b1-4eb0-b684-08ddfda153a8.jpg" -o "public/image/projects/pump-station-2.jpg" && echo "✅ Насосная станция 2"
curl -s -L "https://cdn.poehali.dev/files/03c39c83-e9f1-4dd4-9526-5041de8cc8fc.jpg" -o "public/image/projects/pump-station-3.jpg" && echo "✅ Насосная станция 3"

# Проекты - Кофемашина
curl -s -L "https://cdn.poehali.dev/files/b92c500e-cb29-4976-b572-444e596324be.jpg" -o "public/image/projects/coffee-machine-1.jpg" && echo "✅ Кофемашина 1"
curl -s -L "https://cdn.poehali.dev/files/c0f109a1-09c6-41ca-8851-0014f64c7eee.jpg" -o "public/image/projects/coffee-machine-2.jpg" && echo "✅ Кофемашина 2"
curl -s -L "https://cdn.poehali.dev/files/289cd412-0572-4a69-8c5d-a2113ca16e49.jpg" -o "public/image/projects/coffee-machine-3.jpg" && echo "✅ Кофемашина 3"

# Проекты - CIP станция
curl -s -L "https://cdn.poehali.dev/files/0fbdd3d7-ddbc-4c1d-ad9e-54c05e4cc478.jpg" -o "public/image/projects/cip-station-1.jpg" && echo "✅ CIP станция 1"
curl -s -L "https://cdn.poehali.dev/files/17aee797-1162-491e-9959-56373c922394.jpg" -o "public/image/projects/cip-station-2.jpg" && echo "✅ CIP станция 2"
curl -s -L "https://cdn.poehali.dev/files/4697ffc1-d1cd-4344-8c7e-05f6b70e71c2.jpg" -o "public/image/projects/cip-station-3.jpg" && echo "✅ CIP станция 3"

# Проекты - Пастеризационная установка
curl -s -L "https://cdn.poehali.dev/files/a7015e22-3e72-4492-a189-1ed39e18d1aa.jpg" -o "public/image/projects/pasteurization-main.jpg" && echo "✅ Пастеризация главное"
curl -s -L "https://cdn.poehali.dev/files/ef291fbd-2e7b-4590-8840-21e9c55aaa02.jpg" -o "public/image/projects/pasteurization-1.jpg" && echo "✅ Пастеризация 1"
curl -s -L "https://cdn.poehali.dev/files/38b45870-1be3-4651-ad0f-9541dfcbd8f5.jpg" -o "public/image/projects/pasteurization-2.jpg" && echo "✅ Пастеризация 2"
curl -s -L "https://cdn.poehali.dev/files/9058189b-5477-445c-8da9-80ecdcd17610.jpg" -o "public/image/projects/pasteurization-3.jpg" && echo "✅ Пастеризация 3"

# Проекты - Ванна пастеризации
curl -s -L "https://cdn.poehali.dev/files/8ea1d273-a24f-4e0e-a236-eed623c8a7b9.jpg" -o "public/image/projects/vdp-bath-1.jpg" && echo "✅ Ванна ВДП 1"
curl -s -L "https://cdn.poehali.dev/files/a0354164-cd50-4936-939c-43e6f1a3345b.jpg" -o "public/image/projects/vdp-bath-2.jpg" && echo "✅ Ванна ВДП 2"
curl -s -L "https://cdn.poehali.dev/files/36817329-1244-473c-9c52-01128ad75fec.jpg" -o "public/image/projects/vdp-bath-3.jpg" && echo "✅ Ванна ВДП 3"

# Проекты - Тепловой пункт
curl -s -L "https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg" -o "public/image/projects/heating-point-1.jpg" && echo "✅ Тепловой пункт 1"
curl -s -L "https://cdn.poehali.dev/files/c16de542-05e9-40e5-8181-a8347ca4fb6b.jpg" -o "public/image/projects/heating-point-2.jpg" && echo "✅ Тепловой пункт 2"
curl -s -L "https://cdn.poehali.dev/files/4565a80a-10b7-4f21-9260-8a439930cc8a.jpg" -o "public/image/projects/heating-point-3.jpg" && echo "✅ Тепловой пункт 3"

# Проекты - Лебёдка
curl -s -L "https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg" -o "public/image/projects/winch-1.jpg" && echo "✅ Лебёдка 1"
curl -s -L "https://cdn.poehali.dev/files/57c189d7-0cf9-4b23-85d9-80fb1375670b.jpg" -o "public/image/projects/winch-2.jpg" && echo "✅ Лебёдка 2"
curl -s -L "https://cdn.poehali.dev/files/c203515f-65e8-406d-95c5-d033c6574ede.jpg" -o "public/image/projects/winch-3.jpg" && echo "✅ Лебёдка 3"

# Проекты - Система смазки
curl -s -L "https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg" -o "public/image/projects/lubrication-system-1.jpg" && echo "✅ Система смазки 1"
curl -s -L "https://cdn.poehali.dev/files/007eff64-e68b-4ce8-a4a8-878768c740c6.jpg" -o "public/image/projects/lubrication-system-2.jpg" && echo "✅ Система смазки 2"
curl -s -L "https://cdn.poehali.dev/files/b9629c4b-b14d-4007-a2fc-68a96789bb30.jpg" -o "public/image/projects/lubrication-system-3.jpg" && echo "✅ Система смазки 3"

# Проекты - Дозирование удобрений
curl -s -L "https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg" -o "public/image/projects/fertilizer-dosing-1.jpg" && echo "✅ Дозирование 1"
curl -s -L "https://cdn.poehali.dev/files/36f22fdf-fbc1-494f-9f07-81a2659796b0.jpg" -o "public/image/projects/fertilizer-dosing-2.jpg" && echo "✅ Дозирование 2"
curl -s -L "https://cdn.poehali.dev/files/6b1c3339-329c-48fb-a41c-c823b6a65c3f.jpg" -o "public/image/projects/fertilizer-dosing-3.jpg" && echo "✅ Дозирование 3"

echo ""
echo "🎉 Загрузка завершена!"
echo "📊 Всего загружено изображений:"
echo "   • Основные изображения: 6"
echo "   • AISI корпуса: 4" 
echo "   • Частотные преобразователи: 2"
echo "   • Главная страница: 6"
echo "   • Люки: 4"
echo "   • Логотипы компаний: 10"
echo "   • Проекты: 27"
echo ""
echo "📁 Структура папок:"
echo "public/image/"
echo "├── logo.png"
echo "├── seo/"
echo "├── aisi/"
echo "├── frequency-converters/"
echo "├── home/"
echo "├── hatches/"
echo "├── companies/"
echo "└── projects/"
echo ""
echo "✨ Готово! Все изображения загружены локально."