#!/bin/bash

# Load environment variables from the .env file
source .env

echo "Running nextjs build"
# run nextjs build
npm run build

echo "cd build"
# navigate into static file folder
cd build 

echo "Copying files to ssh"
# copy files to the remote server
scp -r ./* ${USERNAME}@melkki.cs.helsinki.fi:/cs/home/${USERNAME}/public_html

echo "Change permissions"
# change permissions of files on the remote server
ssh ${USERNAME}@melkki.cs.helsinki.fi 'chmod -R o+rx /cs/home/${USERNAME}/public_html'


echo "Done. Exiting..."
