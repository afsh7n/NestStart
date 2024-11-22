FROM nginx:latest

# کپی تنظیمات Nginx به داخل کانتینر
COPY nginx.conf /etc/nginx/nginx.conf

# در صورت نیاز به SSL
# COPY ssl/ /etc/nginx/ssl/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
