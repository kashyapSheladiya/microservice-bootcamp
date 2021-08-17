# Comments service
* No db is used. data would be temporarly stored in a variable.
* It will have two requests

## post request
* path '/posts/:id/comments'
* method POST
* body { content: string }
* goal create a comment associated with the given post ID

## get request
* path '/posts/:id/comments'
* method GET
* body -
* goal retrive all comments associated with the given post ID

## To run a service
* npm start
* Posts service will run on 4001 port.
