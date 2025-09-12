# Выполнение bash команд копирования

## Статус проверки
✅ **Исходные файлы найдены в `public/img/`:**
- `370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg` (будущий логотип)
- `218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg` (будущие AISI корпуса)  
- `12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg` (будущий частотный преобразователь)

❌ **Целевые файлы пока не созданы:**
- `public/image/logo.png` - НЕ СУЩЕСТВУЕТ
- `public/image/aisi/main.jpg` - НЕ СУЩЕСТВУЕТ
- `public/image/frequency-converters/ad30.jpg` - НЕ СУЩЕСТВУЕТ

## Команды для выполнения

### Вариант 1: Прямые bash команды
```bash
mkdir -p public/image/aisi
mkdir -p public/image/frequency-converters
cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png
cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg  
cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg

ls -la public/image/
ls -la public/image/aisi/
ls -la public/image/frequency-converters/
```

### Вариант 2: Через созданный скрипт
```bash
chmod +x execute-copy-commands.sh
./execute-copy-commands.sh
```

### Вариант 3: Одной командой
```bash
mkdir -p public/image/{aisi,frequency-converters} && \
cp public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg public/image/logo.png && \
cp public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg public/image/aisi/main.jpg && \
cp public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg public/image/frequency-converters/ad30.jpg && \
echo "Готово!"
```

## Ожидаемый результат

После выполнения команд:

### Структура папок:
```
public/image/
├── logo.png                          ← Логотип компании
├── aisi/
│   ├── .gitkeep
│   └── main.jpg                     ← Корпуса AISI  
└── frequency-converters/
    ├── .gitkeep
    └── ad30.jpg                    ← Частотные преобразователи
```

### Вывод ls команд:
```
public/image/:
logo.png
aisi/
companies/
frequency-converters/
...

public/image/aisi/:
.gitkeep
main.jpg

public/image/frequency-converters/:
.gitkeep
ad30.jpg
```

## Проверка успеха

После выполнения проверьте:
```bash
# Должны появиться 3 новых файла
ls -la public/image/logo.png
ls -la public/image/aisi/main.jpg
ls -la public/image/frequency-converters/ad30.jpg

# Сравните размеры с исходными
ls -la public/img/370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg
ls -la public/img/218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg  
ls -la public/img/12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg
```

## Примечание о переименовании

- `370fbc49-cfa7-44f4-968a-df3ea3c6a6d0.jpg` → `logo.png` (изменен формат на .png)
- `218ac11f-f5a8-46c7-bf22-ac0c6134f8c0.jpg` → `main.jpg` (осталось .jpg)
- `12ef29fa-98bd-43ca-801c-e3b23b02c823.jpg` → `ad30.jpg` (осталось .jpg)