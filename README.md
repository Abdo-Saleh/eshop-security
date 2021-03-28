# SecurityEshop

This project was developed as part of team project.  

## BUILD
- if you build app on your own and you cant build spring on your own, please download latest image on link below and replace old one in cyran-back-end/target
  https://ulozto.cz/file/aamGjgZi2TiY/server-0-0-1-snapshot-jar  
  password: cyran  


## FOR LOCAL DEPLOYMENT - RECOMMENDED  
1. Download docker, docker-compose  
2. sudo docker-compose -f docker-compose-local-with-mail.yml up  
   or  
    docker-compose -f docker-compose-local-with-mail.yml up  


## RESTARTING WITH CLEAN DATA  
 - first call docker-compose with down and after it with up to run again  
	docker-compose -f docker-compose-local-with-mail.yml down  
	docker-compose -f docker-compose-local-with-mail.yml up  


## ONLY FOR A TRY  

1. Download docker, docker-compose  
2. sudo docker-compose up  