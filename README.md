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

// of course, it's easy to use variable while u need
const matchPrefix = (prefix) => {
    return globalMatch(text, `for="${prefix} (.+?)"`);
}

matchPrefix('hi'); //[ 'ray', 'louie' ]
matchPrefix('hello'); //[ 'foam', 'magnus', 'leo' ]
```
