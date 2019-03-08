#!/bin/bash

echo "STARTING ELECTRON"

echo "reload webapp code"
cd electron/angular-electron/src/app/
rm app*
rm -rf tab*
cp ../../../../webapp/merged/app* ./
cp -R ../../../../webapp/merged/tab* ./

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