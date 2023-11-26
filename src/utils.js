const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function findHighestCode(array){
  if(array.length === 0) return 0;

  return array.map(element => element.code).reduce((acc, element) => {
    if (acc > element) {
      return acc;
    } else {
      return element;
    }
  })
}

export function wordEnding(count,arrOfEndings) {
  const n = count % 100;
  if (n > 11 && n < 15) return arrOfEndings[0];
  const num = n % 10;
  if (num > 1 && num < 5) return arrOfEndings[1];
  return arrOfEndings[0];
}