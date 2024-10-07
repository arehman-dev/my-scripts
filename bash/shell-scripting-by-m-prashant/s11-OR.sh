#!/bin/bash

#i'm going to practice OR operator in this scipt

S1="s1-hello.sh"
S2="s2-comments.sh"

if [[ -e $S1 || -e $S2 ]]; then
echo "Any one of two script does exist."
else
echo "First script oes not existed, while the existance of second in not verified."
fi

