# Motive
- Store post
- To analyse the data in a given post id

# Tech Stack
- Framework: express
- Databases: mysql 
- Caching: Redis
- Tools: VSCode, Postman

# Future plans
- Store content of post in s3 bucket for larger content
- Kafka Workers to process the content
- ML Models: NLTK based models
  
# Setup
1. `git clone https://github.com/nitindoodhiya/post-analyser.git`
2. `cd post-analyser`
3. `docker compose up`
4. copy content of .env.sample to .env
5. `sh setup.sh`
6. start api server: `npm start`
7. open http://localhost:3000/

# Endpoints
- POST [/api/v1/posts/]
- GET [/api/v1/posts/:id/analysis]
