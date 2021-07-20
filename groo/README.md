# Build a POC for a question asking web server, supporting a REST API for the client side team to work with

# Running the project
Run the project by running `npm run dev`

# APIs
The BaseUrl is `http://localhost:3000/api/questions`

1. Insert - Post request to `BaseUrl/questions/insertQuestion` and add body like this => 
    {
        "textDescription":"What is your favorite color?",
        "answers":[{"text":"Red"},{"text":"Black"},{"text":"Green"},{"text":"Yellow"}]

        *for trivia add {"isCorrect":true} to the answers = > "answers":[{"text":"Red", "isCorrect":true},{"text":"Black"},{"text":"Green"},{"text":"Yellow"}]
    }

2. Get - request to `BaseUrl/questions/:id`

3. Vote - Put request to `BaseUrl/questions/:id` and add body with the answer like this => `{"answer":"1"}`

