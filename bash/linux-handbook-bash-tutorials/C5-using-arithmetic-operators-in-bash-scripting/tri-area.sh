#!/bin/bash

#this script calculates the area of triangle with input of  base & height

echo "This script prints the area of triangle"
echo "please input the base of triangle"
read b
echo "please input the height of triangle"
read h

area=$(((($b * $h)) / 2 )) 
echo "The area of triangle is $area"
