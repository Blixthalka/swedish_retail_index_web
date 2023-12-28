FROM nginx:stable
COPY ./build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /srindex/cache
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
