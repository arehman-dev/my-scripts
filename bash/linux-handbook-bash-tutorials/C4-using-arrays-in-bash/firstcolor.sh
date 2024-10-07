#!/bin/bash

#this script stores rainbow colors in array prints specific colors


rainbowcolors=(red orange yellow green blue purple indigo)
echo "my favourite color from rainbow colors is ${rainbowcolors[4]}"

echo "some other colors from rainbow colors are ${rainbowcolors[5]} & ${rainbowcolors[2]}"

echo "all the rainbow colors are :  ${rainbowcolors[*]}"

echo "cheers"

