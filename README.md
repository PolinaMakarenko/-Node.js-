# -Node.js-
Описание
-----

Web-приложение  позволяет создавать короткие URL

* Приложение не содержит авторизации. 
* Пользователь при желании может указать свой короткий адрес.
* Приложение отслеживает пользователей по сессии. Сессии хранятся в Redis Session Store. Длина сессии 30 минут, затем хранилище отчищается. 
* Данные из  MongoDB отчищаются каждые 5 минут. 

Stack: NodeJS, Express,  Redis, MongoDB, React, Redux Toolkit.

Установка
-----

Пример настроек для .env лежит в .env.copy
Для подключения к mongoDB в переменную "DATABASE_UR" вставить свою ссылку на подключение.

Установить зависимости и запустить бэк из папки server с помощью команд: 
```
npm install
```
```
npm run dev
```
Установить зависимости и запустить фронт из папки client с помощью команд:
``` 
npm install
```
```
npm start
```

