# Coffee Site — установка на Windows и деплой на GitHub Pages

Этот проект запускается как статический сайт (HTML + CSS + React через CDN), поэтому не требует сборки.

## 1) Что установить на Windows

1. **Git for Windows**: https://git-scm.com/download/win  
2. **Node.js LTS** (рекомендуется 20+): https://nodejs.org/  
3. (Опционально) **Python** для локального сервера: https://www.python.org/downloads/windows/

Проверка в PowerShell:

```powershell
git --version
node --version
npm --version
python --version
```

---

## 2) Клонирование репозитория

```powershell
git clone https://github.com/<YOUR_USERNAME>/Activities.git
cd Activities
```

> Если работаете через fork, используйте URL вашего fork-репозитория.

---

## 3) Локальный запуск сайта

```powershell
cd coffee-site
python -m http.server 4173
```

Откройте:

- http://127.0.0.1:4173

Остановка сервера: `Ctrl + C`.

---

## 4) Деплой на GitHub Pages (из папки `coffee-site`)

В этом репозитории уже добавлен workflow:

- `.github/workflows/deploy-coffee-site.yml`

Он автоматически публикует содержимое `coffee-site/` на GitHub Pages при push в `main`.

### Что нужно сделать в GitHub один раз

1. Откройте репозиторий на GitHub.
2. Перейдите в **Settings → Pages**.
3. В **Build and deployment** выберите:
   - **Source**: `GitHub Actions`
4. Сохраните настройки.

После этого любой push в `main` с изменениями в `coffee-site/**` запустит деплой.

---

## 5) Коммиты и push

Из корня `Activities`:

```powershell
git add coffee-site .github/workflows/deploy-coffee-site.yml
git commit -m "feat(coffee-site): add Windows setup and GitHub Pages deploy guide"
git push origin main
```

Если вы работаете в feature-ветке:

```powershell
git push origin <YOUR_BRANCH>
```

Потом создайте Pull Request в `main`.

---

## 6) Как проверить, что деплой прошёл

1. Откройте вкладку **Actions** в GitHub.
2. Найдите workflow **Deploy coffee-site to GitHub Pages**.
3. Убедитесь, что job `deploy` завершился со статусом ✅.
4. В логах шага `Deploy to GitHub Pages` будет URL опубликованного сайта.

Обычно URL такого формата:

```
https://<YOUR_USERNAME>.github.io/Activities/
```

---

## 7) Частые проблемы

### Белая страница
- Открывайте сайт через `http://...`, а не `file:///...`.
- Проверьте, что сеть не блокирует CDN (`unpkg.com`).

### 404 на GitHub Pages
- Проверьте, что в **Settings → Pages** выбран `GitHub Actions`.
- Убедитесь, что workflow отработал успешно.

### Workflow не стартует
- Workflow слушает push в `main` по путям `coffee-site/**`.
- Если push был в другую ветку, откройте PR и влейте в `main`.

---

## 8) Мини-чеклист

- [ ] Локально открывается `http://127.0.0.1:4173`
- [ ] Есть push с изменениями в `coffee-site/**`
- [ ] В Settings → Pages выбран источник `GitHub Actions`
- [ ] Workflow `Deploy coffee-site to GitHub Pages` зелёный
- [ ] Публичный URL открывается без ошибок
