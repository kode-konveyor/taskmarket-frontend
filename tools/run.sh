#! /bin/sh

echo "{" > config.json 
echo "    \"BACKEND_URL\": \"${BACKEND_URL}\"" >> config.json
echo "}" >> config.json
serve -s .
