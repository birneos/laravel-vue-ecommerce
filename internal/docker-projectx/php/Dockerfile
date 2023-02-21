ARG PHP_VERSION=8.1
FROM php:$PHP_VERSION-fpm

RUN docker-php-ext-install pdo_mysql opcache

COPY php.ini "$PHP_INI_DIR/php.ini"
COPY opcache.ini "$PHP_INI_DIR/opcache.ini"

#RUN pecl install xdebug
#RUN docker-php-ext-enable xdebug
COPY xdebug.ini "/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini"