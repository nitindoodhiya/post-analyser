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
- git clone https://github.com/nitindoodhiya/post-analyser.git
- cd post-analyser
- npm install
- docker compose up
- open http://localhost:3000/

# Endpoints
- POST [/api/v1/posts/]
- GET [/api/v1/posts/:id/analysis]
