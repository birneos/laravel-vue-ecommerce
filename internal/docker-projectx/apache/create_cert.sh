#!/bin/bash
openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj "/C=DE/ST=Bundesland/L=Stadt/O=Organisation/CN=Abteilung" -keyout ./ssl.key -out ./ssl.crt
