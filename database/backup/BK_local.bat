set pg_env="C:\Program Files\PostgreSQL\12\bin"
%pg_env%\pg_dump.exe -h localhost -p 5432 -U postgres ecommerce > ecommerce.sql
pause

