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
   let buffRes=''; 
     let i=0;
    while(i<expr.length-1)
    {   
        if( expr.slice(i, i+10)=='**********') buffRes=buffRes+' ';
        if( expr.slice(i, i+10)=='0000001011') buffRes=buffRes+'a';
        if( expr.slice(i, i+10)=='0011101010') buffRes=buffRes +'b';
        if( expr.slice(i, i+10)=='0011101110') buffRes=buffRes +'c';
        if( expr.slice(i, i+10)=='0000111010') buffRes=buffRes +'d';
        if( expr.slice(i, i+10)=='0000000010') buffRes=buffRes +'e';
        if( expr.slice(i, i+10)=='0010101110') buffRes=buffRes+'f';
        if( expr.slice(i, i+10)=='0000111110') buffRes=buffRes+'g';
        if( expr.slice(i, i+10)=='0010101010') buffRes=buffRes+'h';
        if( expr.slice(i, i+10)=='0000001010') buffRes=buffRes+'i';
        if( expr.slice(i, i+10)=='0010111111') buffRes=buffRes+'j';
        if( expr.slice(i, i+10)=='0000111011') buffRes=buffRes+'k';
        if( expr.slice(i, i+10)=='0010111010') buffRes=buffRes+'l';
        if( expr.slice(i, i+10)=='0000001111') buffRes=buffRes+'m';
        if( expr.slice(i, i+10)=='0000001110') buffRes=buffRes+'n'; 
        if( expr.slice(i, i+10)=='0000111111') buffRes=buffRes+'o';
        if( expr.slice(i, i+10)=='0010111110') buffRes=buffRes+'p';
        if( expr.slice(i, i+10)=='0011111011') buffRes=buffRes+'q';
        if( expr.slice(i, i+10)=='0000101110') buffRes=buffRes+'r';
        if( expr.slice(i, i+10)=='0000101010') buffRes=buffRes+'s';
        if( expr.slice(i, i+10)=='0000000011') buffRes=buffRes+'t';
        if( expr.slice(i, i+10)=='0000101011') buffRes=buffRes+'u';
        if( expr.slice(i, i+10)=='0010101011') buffRes=buffRes+'v';
        if( expr.slice(i, i+10)=='0000101111') buffRes=buffRes+'w';
        if( expr.slice(i, i+10)=='0011101011') buffRes=buffRes+'x';
        if( expr.slice(i, i+10)=='0011101111') buffRes=buffRes+'y';
        if( expr.slice(i, i+10)=='0011111010') buffRes=buffRes+'z';
        if( expr.slice(i, i+10)=='1011111111') buffRes=buffRes+'1';
        if( expr.slice(i, i+10)=='1010111111') buffRes=buffRes+'2';
        if( expr.slice(i, i+10)=='1010101111') buffRes=buffRes+'3';
        if( expr.slice(i, i+10)=='1010101011') buffRes=buffRes+'4';
        if( expr.slice(i, i+10)=='1010101010') buffRes=buffRes+'5';
        if( expr.slice(i, i+10)=='1110101010') buffRes=buffRes+'6';
        if( expr.slice(i, i+10)=='1111101010') buffRes=buffRes+'7';
        if( expr.slice(i, i+10)=='1111111010') buffRes=buffRes+'8';
        if( expr.slice(i, i+10)=='1111111110') buffRes=buffRes+'9';
        if( expr.slice(i, i+10)=='1111111111') buffRes=buffRes+'0';
        i=i+10;
    }
   
    return buffRes;
}
}

module.exports = {
    decode
}
