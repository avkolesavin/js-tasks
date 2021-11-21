#!/bin/bash

if [ -n $1 ] && [ -n $2 ]; then
    cd $1 && touch "$2.js" "$2.test.js"
fi