set pg_env="C:\Program Files\PostgreSQL\12\bin"
%pg_env%\psql.exe -h localhost -p 5432 -U postgres -f kill_local.sql
%pg_env%\dropdb.exe -h localhost -p 5432 -U postgres ecommerce
%pg_env%\createdb.exe -h localhost -p 5432 -U postgres ecommerce
%pg_env%\psql.exe -h localhost -p 5432 -U postgres ecommerce < "ecommerce.sql"
pause
