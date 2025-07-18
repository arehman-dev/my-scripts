#!/bin/bash

#this script simply prints the area & perimeter of rectangle.
#we only give input of length & widht 


echo "This script prints the area & perimeter of rectangle"
echo "please input the lenght of rectangle"
read l
echo "please input the width of rectangle"
read w

area=$(($l * $w))
perimeter=$(((($l + $w))* 2))

echo "The area of given data is $area"
echo "The perimeter of given data is $perimeter"

