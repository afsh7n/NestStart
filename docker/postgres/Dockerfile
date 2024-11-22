FROM postgres:14

COPY generate-init.sql.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/generate-init.sql.sh

RUN chmod -R 0777 /docker-entrypoint-initdb.d
