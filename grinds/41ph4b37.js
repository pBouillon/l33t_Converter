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

var ALPHA = {} ;
var ALPH4 = {} ;

var LEET_CHARS   = "'(),-/01234567<=DY[\\]_`{|}" ;
var LEET_MAX_LEN = 3 ;
var LEET_AVG_LEN = 2 ;

var ALPH_SIZE    = 26 ;

// text -> t3xt
ALPHA ['A'] = '4'  ;
ALPHA ['B'] = '|3' ;
ALPHA ['C'] = '('  ;
ALPHA ['D'] = '|)' ;
ALPHA ['E'] = '3'  ;
ALPHA ['F'] = '|=' ;
ALPHA ['G'] = '6'  ;
ALPHA ['H'] = '(-)' ;
ALPHA ['I'] = '|'   ;
ALPHA ['J'] = '_|'  ;
ALPHA ['K'] = '|<'  ;
ALPHA ['L'] = '1'   ;
ALPHA ['M'] = '|Y|' ;
ALPHA ['N'] = '|\\|' ;
ALPHA ['O'] = '0'   ;
ALPHA ['P'] = '|D'  ;
ALPHA ['Q'] = '(,)' ;
ALPHA ['R'] = '|2'  ;
ALPHA ['S'] = '5'   ;
ALPHA ['T'] = '7'   ;
ALPHA ['U'] = '[_]' ;
ALPHA ['V'] = '\\/' ;
ALPHA ['W'] = '\'//';
ALPHA ['X'] = '}{' ;
ALPHA ['Y'] = '`/' ;
ALPHA ['Z'] = '2'  ;

// t3xt -> text
ALPH4 [ALPHA['A']] = 'A' ;
ALPH4 [ALPHA['B']] = 'B' ;
ALPH4 [ALPHA['C']] = 'C' ;
ALPH4 [ALPHA['D']] = 'D' ;
ALPH4 [ALPHA['E']] = 'E' ;
ALPH4 [ALPHA['F']] = 'F' ;
ALPH4 [ALPHA['G']] = 'G' ;
ALPH4 [ALPHA['H']] = 'H' ;
ALPH4 [ALPHA['I']] = 'I' ;
ALPH4 [ALPHA['J']] = 'J' ;
ALPH4 [ALPHA['K']] = 'K' ;
ALPH4 [ALPHA['L']] = 'L' ;
ALPH4 [ALPHA['M']] = 'M' ;
ALPH4 [ALPHA['N']] = 'N' ;
ALPH4 [ALPHA['O']] = 'O' ;
ALPH4 [ALPHA['P']] = 'P' ;
ALPH4 [ALPHA['Q']] = 'Q' ;
ALPH4 [ALPHA['R']] = 'R' ;
ALPH4 [ALPHA['S']] = 'S' ;
ALPH4 [ALPHA['T']] = 'T' ;
ALPH4 [ALPHA['U']] = 'U' ;
ALPH4 [ALPHA['V']] = 'V' ;
ALPH4 [ALPHA['W']] = 'W' ;
ALPH4 [ALPHA['X']] = 'X' ;
ALPH4 [ALPHA['Y']] = 'Y' ;
ALPH4 [ALPHA['Z']] = 'Z' ;
