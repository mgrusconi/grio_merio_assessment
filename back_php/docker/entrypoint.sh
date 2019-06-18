#!/bin/sh
composer install --ignore-platform-reqs
chmod 777 -Rf var
/usr/bin/supervisord