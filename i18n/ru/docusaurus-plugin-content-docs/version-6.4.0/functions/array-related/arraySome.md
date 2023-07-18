---
title: $arraySome
description: '$arraySome проверит заданные элементы в массиве.'
id: arraySome
---

`$arraySome` проверит заданные элементы в массиве и вернет логическое значение.

## Использование

```php
$arraySome[name;query;queryType?]
```

## Параметры

| Название     | Nbg    | Описание                                                             | Нужно |
| ------------ | ------ | -------------------------------------------------------------------- |:-----:|
| название     | строка | Название массива.                                                    |  да   |
| запрос       | строка | Элемент, который мы будем ждать для каждого элемента внутри массива. |  да   |
| тип запроса? | строка | Оператор сравнения.                                                  | ложь  |

* `==` — Каждый элемент, соответствующий запросу.
* `!=` — Каждый элемент, который не соответствует запросу.
* `>`  — Все элементы "слева" найденного предмета, за исключением самого себя.
* `<`  — Все элементы "справа" найденного предмета, за исключением самого себя.
* `>=` — Все элементы "слева" найденного предмета, включая себя.
* `<=` — Все элементы "справа" найденного предмета, включая себя.

## Пример(ы)

```javascript
bot.command({
    name: "array-some",
    code: `
  $arraySome[array;aoi.js;==]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```