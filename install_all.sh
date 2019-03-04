#!/bin/bash

echo "Install dependencies for electron"
cd electron/angular-electron
npm install

echo "
Install dependencies for ionic"
cd ../../ionic/xPlatformIosDemoApp
npm install

cd ../../

echo "
DONE.
"