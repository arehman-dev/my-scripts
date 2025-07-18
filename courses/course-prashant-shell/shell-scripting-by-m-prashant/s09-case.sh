#!/bin/bash


#in this script i'm playing with cases.
#let's try them out.

echo "lets choose an option "
echo "a) In which directory scripts are written? "
echo "b) List down all the scripts? "
echo "c) Who wrote down the scripts? "
echo "d) exit"
read -p "Enter your choice (a-d): " choice
case $choice in
a)
echo "directory of scripts : $(pwd)"
;;
b)
echo "list of scripts :" $(ls)
;;
c)
echo "Author : $(whoami)"
;;
d)
echo "exiting..."
exit 0
;;
*)
echo "Not a valid input"
esac

