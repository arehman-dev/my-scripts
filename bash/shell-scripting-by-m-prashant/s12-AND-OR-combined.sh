#!/bin/bash

# I'm going to practice AND & OR operator combined in this script,

S1="s1-hello.sh"
S2="s2-comments.sh"
S3="s3-variables"

if [[ -e $S1 && -e $S2 || -e $S3 ]]; then
echo "Your first three scripts does existed."
else
echo "Something went wrong with your script. have a look at that directory."
fi

