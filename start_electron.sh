#!/bin/bash

echo "STARTING ELECTRON"

echo "
build Angular"
cd ionic_electron/xPlatformIosDemoApp
ng build --prod

echo "
run webserver"
npm start &

sleep 30

echo "
starting electron window"
npm run electron 

kill $!

cd ../../
echo "
STOPPED ELECTRON"