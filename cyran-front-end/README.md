# SecurityEshop

This project was developed as part of team project.


#DOCKER 

## ONLY FOR A TRY

1. Download cyran-docker directory from repository  
2. Move inside this unpacked directory using cd command:  
	cd /path/to/cyran/docker  
3. Run following commands (you should ask for permission for backend - is it in private docker-hub repository):  
	docker-compose pull
	docker-compose up
4. Insert data dump to postgres container - for future it will be replaced with initial Hibernate setup:  
	PART OF SCRIPT FAILS, BUT IT MAKES APP FUNCTIONAL!!!  
	4.1 Finding id of docker container with postgres database:   
		  docker ps  
	4.2 Copy created file to docker container (6b647 is start of postgres container id - place it yours):  
		  docker cp ./backup.sql 6b647:/backup.sql  
	4.3 Execute docker script:  
		  docker exec -it 6b647 psql -d postgres -U postgres -f ./backup.sql  
