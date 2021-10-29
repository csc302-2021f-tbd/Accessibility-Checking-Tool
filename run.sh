#!/bin/bash

usage(){
	echo "Usage: sh run.sh <html file>\n" >&2
	exit 2
}

DOE(){
	echo "$1" " does not exist" >&2
	exit 1
}

if [ "$#" -ne 1 ]
then
	usage
fi

file="$1"

if [ ! -f "$file" ]
then
	DOE "$file"
fi

node --experimental-specifier-resolution=node main.js "$file"
