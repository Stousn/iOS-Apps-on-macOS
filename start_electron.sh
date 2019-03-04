#!/bin/bash

echo "STARTING ELECTRON"

echo "reload webapp code"
cd electron/angular-electron/src/app/
rm app*
cp ../../../../webapp/merged/app* ./

echo "
build Angular"
cd ../../
ng build --prod

echo "
starting electron window"
npm start 

cd ../../
echo "
STOPPED ELECTRON"