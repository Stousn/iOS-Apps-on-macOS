#!/bin/bash

echo "Install dependencies for electron"
cd ionic_electron/xPlatformIosDemoApp
npm install

npm install -g electron

npm install -g @angular/cli

echo "
DONE.
"