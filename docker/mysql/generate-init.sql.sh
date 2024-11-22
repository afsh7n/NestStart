#!/bin/bash

# docker/mysql/generate-init.sql.sh
echo "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};" > /docker-entrypoint-initdb.d/init.sql
echo "ALTER USER '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';" >> /docker-entrypoint-initdb.d/init.sql
echo "GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%';" >> /docker-entrypoint-initdb.d/init.sql
