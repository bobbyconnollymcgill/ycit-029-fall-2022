# Lecture 6

1. Setup our basic express server

2. Home page http://localhost:3000/ (root)

3. Check that the user is signed-in
    - make a request to the "/me" endpoint, which will either give back 200 or 401
    - if 200, then they are signed-in......... we'll plan once we get there
    - if 401, then they are NOT signed-in, and we want to redirect them to the /sign-in page

# What is the flow of our App?

1. User navigates to https://localhost:3000

2. Browser sends a GET request to https://localhost:3000/

3. Server parses request (req / res objects are created)

4. The server middleware are called in order

5. The Express "static" middleware processes the request and sends back a response

6. Client receives the response (the HTML) and the browser renders it to the screen and runs the JavaScript

7. JavaScript calls fetch (web API) which emits another request to the server (GET /user-profile)

8. Server recieves request and it matches the "/user-profile" route handler (which _is_ a kind of middleware) and sends back either a 200 or a 401 response depending on some state that exists in the server
