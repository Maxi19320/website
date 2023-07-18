---
title: $isGuildMuted
description: '$isGuildMuted похож, но не путать с `$isMuted`, это проверит заглушен ли пользователь сервером.'
id: isGuildMuted
---

`$isGuildMuted` похож, но не путать с `$isMuted`, это проверит заглушен ли пользователь сервером.

## Использование

```php
$isGuildMuted[userID?;guildID?]
```

## Параметры

| Название         | Nbg   | Описание                                                                            | Нужно |
| ---------------- | ----- | ----------------------------------------------------------------------------------- |:-----:|
| ID пользователя? | целое | Идентификатор пользователя, который вы хотите проверить, заглушен ли он на сервере. | false |
| ID гильдии?      | целое | Идентификатор гильдии, в которой сервер заглушен.                                   | false |

## Пример(ы)

Это вернет `true` или `false` в зависимости от заглушения сервера или нет:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```