#!/bin/bash

usage(){
	echo "Usage: ./run>" >&2
	echo "$# $0"
	exit 2
}

DOE(){
	echo "$1 does not exist."
	exit 1
}

if [[ "$#" -ne 0 ]]; then
	usage
fi

pyversion=$(python3 --version | grep "Python 3*\\.[0-9][0-9]*\\.[0-9][0-9]*")
if [[ $pyversion -eq "" ]]; then
	sudo apt-get install python
fi
npmversion=$(npm --version | grep "[0-9][0-9]*\\.[0-9][0-9]*\\.[0-9][0-9]*")
if [[ $npmversion -eq "" ]]; then
	sudo apt-get install npm
fi

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - sudo apt-get install -y nodejs
npm install
