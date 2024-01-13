# Use an official WordPress image as the base image
FROM wordpress:php8.1-fpm-alpine

# Install or update CA certificates and enable necessary PHP extensions
RUN apk --no-cache add ca-certificates \
    && docker-php-ext-install mysqli pdo pdo_mysql opcache curl

# Copy the IonCube Loader archive into the image
ADD ioncube_loaders_lin_x86-64.tar.gz /

RUN cp /ioncube/ioncube_loader_lin_8.1.so $(php -r "echo ini_get('extension_dir');")/ioncube_loader.so \
    && echo "zend_extension=ioncube_loader.so" > /usr/local/etc/php/conf.d/00-ioncube.ini \
    && rm -rf /tmp/ioncube*

CMD ["php-fpm"]
