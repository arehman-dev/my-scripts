#!/bin/bash

#this script prints the location of command
#this script took command as an argument

location=$(which $1)
echo "location of this command is $location"

