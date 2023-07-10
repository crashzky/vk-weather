## Запуск локально

Для запуска в режиме разработки:

1. Создайте .env файл с переменной WEATHER_API_KEY, api ключ можно получить [здесь](https://yandex.ru/dev/weather/).
Пример файла [.env.example](./.env.example)

2. Запустите в консоли:
```bash
npm run dev
# или
yarn dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Запуск в браузере

Задеплоенный сайт доступен по адресу [https://weather-vk.vercel.app](https://weather-vk.vercel.app)

![](assets/demo.gif)

## Storybook

Также вы можете посмотреть storybook: 

```bash
npm run storybook
# или
yarn run storybook
```

## Cypress 

Вы можете запустить тесты, написанные на cypress.js:

```bash
npm run cypress open
# или
yarn run cypress open
```

## Контакты

- Вконтакте - [Кирилл Осинцев](https://vk.com/crashzy)
- Telegram - [crashzy](https://t.me/crashzy)