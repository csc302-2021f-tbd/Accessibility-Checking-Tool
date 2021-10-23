#!/usr/bin/python

import sys, os, subprocess

def usage():
  sys.stderr.write('Usage: ./run.py <html file>\n')
  sys.stderr.flush()
  exit(2)

def DOE():
  sys.stderr.write(str(sys.argv[1]) + ' does not exist\n')
  sys.stderr.flush()
  exit(1)

if len(sys.argv) != 2:
  usage()


if not os.path.isfile(str(sys.argv[1])):
  DOE()

# print('node --experimental-specifier-resolution=node main.js ' + str(sys.argv[1]))

subprocess.call(["node", 
                 "--experimental-specifier-resolution=node",
                "main.js",
                 str(sys.argv[1])])