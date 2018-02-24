var ALPH = {} ;

ALPH ['A'] = '4'  ;
ALPH ['B'] = '|3' ;
ALPH ['C'] = '('  ;
ALPH ['D'] = '|)' ;
ALPH ['E'] = '3'  ;
ALPH ['F'] = '|=' ;
ALPH ['G'] = '6'  ;
ALPH ['H'] = '(-)' ;
ALPH ['I'] = '|'   ;
ALPH ['J'] = '_|'  ;
ALPH ['K'] = '|<'  ;
ALPH ['L'] = '1'   ;
ALPH ['M'] = '|Y|' ;
ALPH ['N'] = '|\\|' ;
ALPH ['O'] = '0'   ;
ALPH ['P'] = '|D'  ;
ALPH ['Q'] = '(,)' ;
ALPH ['R'] = '|2'  ;
ALPH ['S'] = '5'   ;
ALPH ['T'] = '7'   ;
ALPH ['U'] = '[_]' ;
ALPH ['V'] = '\\/' ;
ALPH ['W'] = '\'//';
ALPH ['X'] = '}{' ;
ALPH ['Y'] = '`/' ;
ALPH ['Z'] = '2'  ;

/**
 * translate human readable text to l33t 
 *
 * Parameter:
 *  - text : (str) text to translate
 */
function get_translation(text) {
    var res  = '' ;
    var char = '' ;

    text = text.toUpperCase() ;
    for (var i = 0; i < text.length; ++i) {
        char = ALPH[text.charAt(i)] ;
        if (char == undefined ) {
            res += text.charAt(i) ;
        } else {
            res += char ;
        }
    }

    $('textarea[name=t3xt]').text(res) ;
}
