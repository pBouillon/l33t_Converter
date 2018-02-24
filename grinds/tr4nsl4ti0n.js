/*
    MIT License

    Copyright (c) 2018 Pierre Bouillon

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/**
 * translate human readable text to l33t 
 *
 * Parameter:
 *  - text : (str) text to translate
 */
function get_encryption(text) {
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

    $('textarea[name=t3xt]').val(res) ;
}

/**
 * translate l33t to readable text
 *
 * Parameter:
 *  - text : (str) text to translate
 */
function get_translation(t3xt) {
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

        // non-l33t char
        else {
            res += t3xt.charAt(i) ;
        }
    }

    res = res.charAt(0) + res.slice(1).toLowerCase() ;
    $('textarea[name=text]').val(res) ;
}

/**
 * Fill tabs to display used alphabet
 */
function populate_tab() {
    let cpt = 0 ;
    let quarter = ALPH_SIZE / 4 ;

    var tab_body = $('#f-quarter').find('tbody') ;

    for (key in ALPHA) {
        if (cpt > quarter * 3) {
            tab_body = $('#l-quarter').find('tbody') ;
        }
        else if (cpt > quarter * 2 - 1) {
            tab_body = $('#t-quarter').find('tbody') ;
        }
        else if (cpt > quarter) {
            tab_body = $('#s-quarter').find('tbody') ;
        }

        tab_body.append($('<tr>')
            .append($('<td>')
                .append($('<p>')
                    .attr('id', 'tab')
                    .html(key)
                    )
                )
            .append($('<td>')
                .append($('<p>')
                    .attr('id', 'tab')
                    .html(ALPHA[key])
                    )
                )
            ) ;

        ++cpt ;
    }
}