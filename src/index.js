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
    let nums = [];
    nums = expr.match(/.{0,10}/g)
        .map((value) => {
            value = value.substring(value.indexOf("1"))
                        .replace(/10/g,".")
                        .replace(/11/g,"-")
                        .replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
            Object.keys(MORSE_TABLE).map((x) => {
                if(x === value) {
                    value = MORSE_TABLE[x];
                }
            })
            return value;
    });
    return nums.join("");


}

module.exports = {
    decode
}