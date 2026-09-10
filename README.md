# Анти-грабли

Лендинг 7-недельной программы Константина Юманова.

Публичная версия: https://razilkik-ops.github.io/grabli2/

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка GitHub Pages

```bash
GITHUB_PAGES=true \
NEXT_PUBLIC_BASE_PATH=/grabli2 \
NEXT_PUBLIC_SITE_URL=https://razilkik-ops.github.io/grabli2/ \
npm run build:pages
```

Платёжные ссылки подключаются через переменные репозитория `CLASS_3_PAYMENT_URL`,
`CLASS_2_PAYMENT_URL` и `CLASS_1_PAYMENT_URL`. Пока переменная класса не задана,
его кнопка ведёт в Telegram.
