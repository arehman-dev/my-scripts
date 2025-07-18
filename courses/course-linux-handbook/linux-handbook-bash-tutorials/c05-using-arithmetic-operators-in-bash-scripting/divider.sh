#!/bin/bash

# this scrpt takes two integers & divides them & print quotient & remainder.

echo "this script divides numbers"

echo "please input Divident"
read a
echo "please input Divisor"
read b

Q=$((a/b))
R=$((a%b))

echo "Quotient is $Q"
echo "Remainder is $R"
