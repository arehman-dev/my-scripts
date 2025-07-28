#!/bin/bash

#script 2/100
#this script is a simple calculator
#i'm adding some features like menu, exit button , etc.

#menu
menu(){
echo "please select an operation"
echo "1. addition"
echo "2. subtraction"
echo "3. multiplication"
echo "4. division"
echo "0. exit"
}

#function
operation(){
case $1 in
1)
echo "you selected addition"
read -p "please input the first value" v1
read -p "please input the second value" v2
r=$(echo "scale=2; $v1 + $v2" | bc)
echo "result: $r"
;;
2)
echo "you selected subtraction"
read -p "please input the first value" v1
read -p "please input the second value" v2
r=$(echo "scale=2; $v1 - $v2" | bc)
echo "result: $r"
;;
3)
echo "you selected multiplication"
read -p "please input the first value" v1
read -p "please input the second value" v2
r=$(echo "scale=2; $v1 * $v2" | bc)
echo "result: $r"
;;
4)
echo "you selected division"
read -p "please input the first value" v1
read -p "please enter the divisor greater than zero" v2
r=$(echo "scale=2; $v1 / $v2" | bc)
echo "result: $r"
;;
0)
echo "exiting..."
exit
;;
*)
echo "please meake a right choice: try again"
;;
esac
}

#menuloop
while true; do
menu 
read -p "enter your choice (0-4): " choice
operation $choice
done


