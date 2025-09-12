# Инструкция по копированию сгенерированных изображений

## Исходные файлы (подтверждены)

✅ Найдены в папке `public/img/`:
- `370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg` → будет логотипом
- `218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg` → будет AISI корпусами  
- `12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg` → будет частотным преобразователем

## Команды для копирования

### Вариант 1: Выполнение готового скрипта

```bash
chmod +x copy-generated-images.sh
./copy-generated-images.sh
```

### Вариант 2: Прямые команды

```bash
# Создание необходимых папок
mkdir -p public/image/aisi
mkdir -p public/image/frequency-converters

# Копирование файлов
cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png
cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg
cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg

# Проверка результата
ls -la public/image/
ls -la public/image/aisi/
ls -la public/image/frequency-converters/
```

### Вариант 3: Простой скрипт

```bash
bash simple-copy-commands.sh
```

## Ожидаемый результат

После выполнения будет создана следующая структура:

```
public/image/
├── logo.png                     (Логотип компании)
├── aisi/
│   └── main.jpg                (Корпуса AISI)
└── frequency-converters/
    └── ad30.jpg               (Частотные преобразователи)
```

## Соответствие файлов

| Исходный файл | Назначение | Описание |
|---------------|------------|----------|
| `370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg` | `public/image/logo.png` | Логотип компании |
| `218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg` | `public/image/aisi/main.jpg` | Корпуса из нержавеющей стали AISI |
| `12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg` | `public/image/frequency-converters/ad30.jpg` | Частотные преобразователи |

## Проверка успешного копирования

```bash
# Проверить, что файлы скопированы
ls -la public/image/logo.png
ls -la public/image/aisi/main.jpg
ls -la public/image/frequency-converters/ad30.jpg

# Сравнить размеры с исходными файлами
ls -la public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg
ls -la public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg
ls -la public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg
```

## Устранение проблем

**Если файлы не найдены:**
```bash
# Проверить наличие исходных файлов
ls -la public/img/

# Найти файлы по паттерну
find . -name "*370fbc49*" -o -name "*218ac11f*" -o -name "*12ef29fa*"
```

**Если ошибки прав доступа:**
```bash
chmod +x copy-generated-images.sh
chmod 644 public/img/*.jpg
```

## Примечание

- Логотип будет сохранен как `.png` (хотя исходный файл `.jpg`)
- Остальные изображения сохранены как `.jpg`
- Папки `aisi/` и `frequency-converters/` уже существуют, но пустые
- После копирования в них появятся нужные изображения