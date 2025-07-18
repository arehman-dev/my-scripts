#!/bin/bash

#this script calculates the area of triangle
#input is all 3 sides.
#heron's formula is been used in it.


echo "This script calculates the area of triangle with input of all 3 sides"
echo "Please input the length of side a"
read a
echo "Please input the length of side b"
read b
echo "Please input the length of side c"
read c

p=$(((($a + $b + $c ))/2))
echo "The Semi-perimeter of given input is $p"

A=$(echo "scale=2; sqrt($p*($p-$a)*($p-$b)*($p-$c))" | bc)
echo "The area of given input is $A"
