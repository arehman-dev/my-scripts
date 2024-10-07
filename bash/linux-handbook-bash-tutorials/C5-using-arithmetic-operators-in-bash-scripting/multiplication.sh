#!/bin/bash

# this script is an exercise from bast tutorial series on linuxhandbook
# this script take an integer as an  input from user & prints the multiplication table of it.


echo "welcome to maths world"
echo "this script prints multiplication table"

echo "which multiplication table you want to be printed"
echo "please input an integer"
read int

echo "here it the integer $int "

echo "multiplication table of $int"

int1=$(($int * 1))
echo "$int * 1 = $int1"

int2=$(($int * 2))
echo "$int * 2 = $int2"

int3=$(($int * 3))
echo "$int * 3 = $int3"

int4=$(($int * 4))
echo "$int * 4 = $int4"

int5=$(($int * 5))
echo "$int * 5 = $int5"

int6=$(($int * 6))
echo "$int * 6 = $int6"

int7=$(($int * 7))
echo "$int * 7 = $int7"

int8=$(($int * 8))
echo "$int * 8 = $int8"

int9=$(($int * 9))
echo "$int * 9 = $int9"

int10=$(($int * 10))
echo "$int * 10 = $int10"
