#!/bin/bash

<<seethis
this script wwill find out whether a substring is found in string 1 or not
that's enough
seethis


read -p "Write down your favourite quote: "  string
read -p "Write down any word: " substring

if [[ "$string" == *"$substring"* ]] ;
then
echo "your word: $substring is found in your quote: $string";
else
echo "your word: $substring isn't found in your quote: $string";
fi
