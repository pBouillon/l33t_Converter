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
        char = ALPHA[text.charAt(i)] ;
        if (char != undefined ) {
            res += char ;
        } 
        else {
            res += text.charAt(i) ;
        }
    }

    $('textarea[name=t3xt]').text(res) ;
}

/**
 *
 */
function get_traduction(t3xt) {
    var res  = '' ;
    var char = '' ;

    for (var i = 0; i < t3xt.length; ++i) {
        // letters of 3 chars
        char = t3xt.substr(i, LEET_MAX_LEN) ;
        char = ALPH4[char] ;
        if (char != undefined) {
            res += char ;
            ++i ; ++i ; // skipping next 2 chars
            continue ;
        }

        // letters of 2 chars
        char = t3xt.substr(i, LEET_AVG_LEN) ;
        char = ALPH4[char] ;
        if (char != undefined) {
            res += char ;
            ++i ; // skipping next char
            continue ;
        }

        //letters of 1 char
        char = ALPH4[t3xt.charAt(i)] ;
        if (char != undefined) {
            res += char ;
        }

        // non l33t char
        else {
            res += t3xt.charAt(i) ;
        }
    }

    res = res.charAt(0) + res.slice(1).toLowerCase() ;
    $('textarea[name=text]').text(res) ;
}
