#!/bin/bash

taskFile="$2.js"
testFile="$2.test.js"
taskTemplate="export default function taskName() {}"
testTemplate="
import taskFunction from './$2.js';
\n\ndescribe('Task $2', () => {
\n\tit('Should ...', () => {});
\n});
"

if [ -n $1 ] && [ -n $2 ]; then
    mkdir -p $1 && cd $1 && touch $taskFile $testFile &&
    echo -e $taskTemplate >> $taskFile &&
    echo -e $testTemplate >> $testFile
fi