#!/bin/bash



#this script replaces the strings.

string1="ubuntu is my current OS. It is popular"
echo "before replacing :"$string1
echo "after replacing"
echo ${string1/popular/open-source}

