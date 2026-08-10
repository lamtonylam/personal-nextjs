#!/bin/bash

echo "Copying files to ssh"
# copy files to the remote server
sshpass -p "${PASSWORD}" scp -r ./* ${USERNAME}@melkinpaasi.cs.helsinki.fi:/cs/home/${USERNAME}/public_html

echo "Change permissions"
# change permissions of files on the remote server
sshpass -p "${PASSWORD}" ssh "${USERNAME}@melkinpaasi.cs.helsinki.fi" "
  chmod 755 /cs/home/${USERNAME}
  find /cs/home/${USERNAME}/public_html -type d -exec chmod 755 {} +
  find /cs/home/${USERNAME}/public_html -type f -exec chmod 644 {} +
  rm -f /cs/home/${USERNAME}/public_html/trace
"

echo "Done. Exiting..."
