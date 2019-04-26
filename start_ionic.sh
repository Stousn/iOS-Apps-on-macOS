#!/bin/bash

echo "STARTING IONIC"

echo "
build Angular"
cd ionic_electron/xPlatformIosDemoApp
ng build --prod

echo "
serve ionic webapp"
npm start 

cd ../../
echo "
STOPPED IONIC"