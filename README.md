## Brief story
At someplace on this world, a young developer has developed a web application, he forgot that we're living in a world full of Evil Spirits, help him secure his app and report the weaknesses.

# SecurityEshop

This project was developed as part of team project. 
 
Frontend: localhost:4200  
Backend (cant be seen): localhost:8080  
Whois: localhost:5001  
Email server: localhost:8025  
 

## Deploy locally
1. Download docker, docker-compose  
2. docker-compose -f docker-compose-local-with-mail-whois.yml up  

#### Note: in case you are on linux, make sure using root  

### FOR OPENING FAKE MAIL SERVER AND SEE MAILS  
 - system must have evidence about email to deliver message  
 - open in your browser: localhost:8025 

### USAGE
1.run:
  docker-compose up
2.relase references:
  docker-compose down
3.remove all stopped containers, all networks not used by at least one container, all images without at least one container associated to them, all build cache:
  docker system prune -a


### Knows issues
- make sure you have freed the following ports: 4200,8080,5001,8025
