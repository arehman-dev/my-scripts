#!/bin/bash

: '
this is multi line comment
i'm going to use some arguments
let's see whether will it work or not? 
'


echo "hi, what's your name?"
read name

echo "welcome to bash, $name, $1, $2 & your whole team"

