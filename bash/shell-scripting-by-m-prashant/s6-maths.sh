#!/bin/bash


# let's do some maths
# i'm going to do input values as arguments
# keep the first num big & secod small cause i'm not using bc command.

sum=$(($1 + $2))
echo "sum is $sum"

sub=$(($1 - $2))
echo "subtraction is $sub"

mul=$(($1 * $2))
echo "multiplication is $mul"

div=$(($1 / $2))
echo "Dvision is $div"
