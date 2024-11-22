#!/bin/bash

# docker/postgres/generate-init.sql.sh
echo "CREATE DATABASE ${POSTGRES_DB};" > /docker-entrypoint-initdb.d/init.sql
echo "ALTER USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}';" >> /docker-entrypoint-initdb.d/init.sql
