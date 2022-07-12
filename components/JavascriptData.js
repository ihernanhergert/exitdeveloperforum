import React from "react";
import ReactMarkdown from "react-markdown";

const JavascriptData = () => {
  const question1 = `
    function convertirCaracterEntero(caracter) {

    switch(caracter){
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;
        default: return 0;
        }
    }

    var romanToInt = function(s) {
        let numero = convertirCaracterEntero(s.charAt(0))
        let anterior;
        let siguiente;
    
    for (let i = 1; i < s.length; i++){
        actual = convertirCaracterEntero(s.charAt(i));
        anterior = convertirCaracterEntero(s.charAt(i - 1));
        
        if (actual <= anterior){
                numero += actual;
        } else {
            numero = numero - anterior * 2 + actual;
        }
    }
    
    return numero

};
`;  

  const question2 = `
  const findMidPoint = (head) => {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

const reverse = (head) => {
    let prev = null;
    let cur = head;
    while (cur){
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

const compare = (list1, list2) => {
    while (list1 && list2){
        if(list1.val !== list2.val) return false;
        list1 = list1.next;
        list2  = list2.next;
    }
    return true
}

var isPalindrome = function(head) {
    const midpoint = findMidPoint(head);
    const tail = reverse(midpoint);
    return compare(head, tail);
}`;

  return (
    <div>
      {/* Pregunta 1 */}
      <h2> Pregunta 1 </h2>
      <h3>Convertir De Número Romano A Entero</h3>
      <pre>{question1}</pre >

      {/* Pregunta 2 */}
      <h2> Pregunta 2 </h2>
      <h3>Palindrome true or false linkedList</h3>
      <pre>{question2}</pre>
    </div>
  );
};

export default JavascriptData;
