docker exec -t post-analyser-db mkdir work
docker cp ./init/backup.sql post-analyser-db:/work/
docker cp ./init/bash.sh post-analyser-db:/work/

docker exec -t post-analyser-db sh ./work/bash.sh
