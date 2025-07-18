#!/bin/bash

#i'm going to practise for loop in this script

places=("Murree" "Galliyat" "Gujrat" "Sialkot" "Sarai Alam geer" "Islamabad" "Rawalpindi" "Faislabad")
for place in "${places[@]}"; do
echo "I have visited $place"
done

