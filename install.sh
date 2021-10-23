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

sudo apt-get install python
sudo apt-get install npm
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - sudo apt-get install -y nodejs
npm install
