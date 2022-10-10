/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here

  // "use strict";

  const BYTES = 1024
  // let bytes = prompt(`Значение:`, '');

  let res = false;
  
  if ((Number.isInteger(bytes))&&( bytes > 0 )&&(typeof bytes != "boolean")){
    let k = Math.log(bytes)/Math.log(BYTES);
    k = k - k%1;
    
    let postfix = (k < 1) ? 'B' :
      (k < 2) ? 'Kb' :
      (k < 3) ? 'Mb' :
      (k < 4) ? 'Gb' :
      (k < 5) ? 'Tb' :
      (k < 6) ? 'Pb' :
      (k < 7) ? 'Eb' :
      (k < 8) ? 'Zb' :
      'Yb';
    let human_memory = bytes/BYTES**k ;

    // ealert(`${bytes} ${human_memory.toFixed(2)}  ${postfix} `);
    // alert(`${bytes}\n 
    // ${k} 
    // ${human_memory.toFixed(2)}  ${postfix}
    // `);
    res = `${human_memory.toFixed(2)} ${postfix}`;
  }

  
  return res;
}



// Буду честен - мне не оч понравилась лекция. Я не работал ранее с CSS, HTML и JS, и поэтому обсуждение каких-то тонкостей языков без общего обзора что это, зачем и как работат не увидел полезным - мало что запомнилось, куча непонятных терминов, обсуждение каких то тонкостей деталей и меточей - каша в голове.

// Возможно имеет смысл в будущем перед лекцией такого характера отсылать студентов заранее на какой то матариал, где бы можно было конкретно шаг за шагом разобораться что такое HTML, посоздавать пару страниц и отработать какие- то базовые концепции, так же с CSS и JS, сегодня когда делал Д.З. изучал док-ю по JS было полезнее и более структурировано читать её, а тут в лекции по верхам вроде о многом  и не о чем, поверхностно и цепляясь за какие то детали,  так такого чтобы бери и применяй.


// Может это мое личное видение, в ожиданиях было 




// Буду честен - мне не оч понравилась лекция. Я не работал ранее с CSS, HTML и JS, и поэтому обсуждение каких-то тонкостей языков без общего обзора что это, зачем и как работат не увидел полезным - мало что запомнилось, куча непонятных терминов, обсуждение каких то тонкостей деталей и меточей - каша в голове.

// Возможно имеет смысл в будущем перед лекцией такого характера отсылать студентов заранее на какой то матариал, где бы можно было конкретно шаг за шагом разобораться что такое HTML, посоздавать пару страниц и отработать какие- то базовые концепции, так же с CSS и JS, сегодня когда делал Д.З. изучал док-ю по JS было полезнее и более структурировано читать её, а тут в лекции по верхам вроде о многом  и не о чем, поверхностно и цепляясь за какие то детали,  так такого чтобы бери и применяй.


// Может это мое личное видение, в ожиданиях было 







