#!/bin/bash

echo "STARTING IONIC"

echo "reload webapp code"
cd ionic/xPlatformIosDemoApp/src/app/
rm app*
cp ../../../../webapp/merged/app* ./

echo "
serve ionic"
cd ../../
ionic serve

cd ../../
echo "
STOPPED IONIC"