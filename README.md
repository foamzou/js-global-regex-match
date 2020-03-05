# README

## Description
Global match group with your regex

### Install
`npm install global-regex-match`

### Usage

```
const globalMatch = require('global-regex-match');

const text = '<label for="hello foam"/> <label for="hi ray"/> <label for="hi louie"/> <label for="hello magnus"/> <label for="hello leo"/>';

// so simple to match all group
globalMatch(text, `for="(.+?)"`); //[ 'hello foam', 'hi ray', 'hi louie', 'hello magnus', 'hello leo' ]

// support multiple group match globally
const text2 = '<label for="hello foam-zou"/> <label for="hi ray-chen"/> <label for="hi louie-wu"/> <label for="hello magnus-lim"/> <label for="hello leo-wu"/>';
globalMatch(text2, `for="hello (.+?)-(.+?)"`); // [ [ 'foam', 'zou' ], [ 'magnus', 'lim' ], [ 'leo', 'wu' ] ]

// of course, it's easy to use variable while u need
const matchPrefix = (prefix) => {
    return globalMatch(text, `for="${prefix} (.+?)"`);
}

matchPrefix('hi'); //[ 'ray', 'louie' ]
matchPrefix('hello'); //[ 'foam', 'magnus', 'leo' ]



```
