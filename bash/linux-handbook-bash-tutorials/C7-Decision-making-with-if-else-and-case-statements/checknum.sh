#!/bin/bash

<<seethis
this  script uses a case statement to identify whether the num is positive or negitive
i'm also going to do input as varaible not an argument
seethis


echo "please input your value other than [ZERO]"
read num
echo "your give num : $num"

if [ "$num" -lt '0' ]; 
then
echo "it's a negative number"
else
echo "it's a positive number"
fi

