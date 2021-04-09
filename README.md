## Brief story
At someplace on this world, a young developer has developed a web application, he forgot that we're living in a world full of Evil Spirits, help him secure his app and report the weaknesses.

# SecurityEshop

This project was developed as part of team project. 

App  | URL
------------- | -------------
Frontend| localhost:4200 
Backend| localhost:8080 (not accessible)
Whois| localhost:5001 
Email server| localhost:8025 

## Deploy locally
1. Download docker, docker-compose  
2. docker-compose up  

#### Note: in case you are on linux, make sure using root  

### FOR OPENING FAKE MAIL SERVER AND SEE MAILS  
 - system must have evidence about email to deliver message  
 - open in your browser: localhost:8025 

### USAGE
USAGE  | Command
------------- | -------------
run  | docker-compose up
relase references  | docker-compose down
remove all containers,images, cache | docker system prune -a


### Knows issues
- make sure you have freed the following ports: 4200,8080,5001,8025
