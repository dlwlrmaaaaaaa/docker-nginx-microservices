#!/bin/sh

# Wait for database (if using MySQL, replace with your database host)
echo "Waiting for database connection..."
sleep 10

# Run database migrations
php artisan migrate --force

# Clear & cache configurations
composer dump-autoload
php artisan config:clear
php artisan cache:clear
php artisan config:cache

# Start Laravel server
php artisan serve --host=0.0.0.0 --port=8000
