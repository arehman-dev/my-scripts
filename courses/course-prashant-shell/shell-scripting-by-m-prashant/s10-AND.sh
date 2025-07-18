#!/bin/bash

#i'm using this script to practise AND operator, simple

S1="s1-hello.sh"
S2="s2-comments.sh"

if [[ -e $S1 && -e $S2 ]]; then 
echo "both scripts existed";
else
echo "something is wrong with scripts"
fi
