#!/bin/bash

npmversion=$(npm --version | grep "[0-9][0-9]*\\.[0-9][0-9]*\\.[0-9][0-9]*")
if [[ $npmversion -eq "" ]]; then
	sudo apt-get install npm
fi

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - sudo apt-get install -y nodejs
npm install
