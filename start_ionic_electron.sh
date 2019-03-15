#!/bin/bash

echo "STARTING IONIC ELECTRON"

echo "reload webapp code"
cd ionic_electron/xPlatformIosDemoApp/src/app/
rm app*
rm -rf tab*
cp ../../../../webapp/merged/app* ./
cp -R ../../../../webapp/merged/tab* ./


echo "
build Angular"
cd ../../
ng build --prod

echo "
serve ionic webapp"
npm start 

cd ../../
echo "
STOPPED IONIC"
