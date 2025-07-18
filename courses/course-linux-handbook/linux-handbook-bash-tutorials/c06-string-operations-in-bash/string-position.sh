#!/bin/bash

# This script identifies the position of words in a string.

string1="Ubuntu is my OS. It is open-source"
tofind="open-source"

# Correctly get the position of 'tofind' in 'string1'
position=$(expr index "$string1" "$tofind")

echo "Position: $position"

