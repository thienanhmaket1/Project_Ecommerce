set pg_env="C:\Program Files\PostgreSQL\12\bin"
%pg_env%\psql.exe -h localhost -p 5432 -U postgres -f kill.sql
%pg_env%\dropdb.exe -h localhost -p 5432 -U postgres dms
%pg_env%\createdb.exe -h localhost -p 5432 -U postgres dms
%pg_env%\psql.exe -h localhost -p 5432 -U postgres kaigi < "dms.sql"
pause
