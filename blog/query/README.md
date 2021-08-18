# Query service
* the goal of this service, we want to have one service that we can make a request to, to get a full listing of all the different posts and their associated comments.
* the one request and get all the data we need.

* two different route handlers.
* 1. goint to receive events from our event-bus. this service will care about events of *type* *post created* and *comments created*.
* 2. watching a get request to /posts.

* this service will not emit any event, so we don't need axios.

## post request
* path '/events'
* it would be from event-bus on *posts* or *comments* creation.

## get request
* path '/posts'
* gives all the data of different posts and their associated comments.

## To run a service
* npm start
* Posts service will run on 4002 port.
