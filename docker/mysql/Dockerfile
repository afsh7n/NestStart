FROM mysql:8.0

COPY generate-init.sql.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/generate-init.sql.sh

COPY my.cnf /etc/mysql/conf.d/