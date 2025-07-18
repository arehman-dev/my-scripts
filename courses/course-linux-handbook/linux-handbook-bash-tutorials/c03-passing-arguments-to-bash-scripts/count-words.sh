#!/bin/bash

# this script take the file "text" & counts the words & lines in it . prints it
# the file "text" has been created by mkfile script.
# remember this script take file as variable not an argument.


nwords=$(wc -w < $1)
nlines=$(wc -l <$1)
nsize=$(wc -c <$1)
echo "there are $nwords words ,  $nlines no. of  lines & $nsize bytes  in this file"



