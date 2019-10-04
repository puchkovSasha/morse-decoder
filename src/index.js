const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    
};


function decode(expr) {

    var box = String(expr.match(RegExp(/\d{10}|\*{10}/g)));

    var zero = box.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');

    var MORSE = zero.replace(/([.-]+[-.]*)/g, (x) =>MORSE_TABLE [x]);
    var comma = String(MORSE.replace(/,/g, ''));

    var result = comma.replace(/\*{10}/g, ' ');
   
    return result;

}

module.exports = {
    decode
}
























