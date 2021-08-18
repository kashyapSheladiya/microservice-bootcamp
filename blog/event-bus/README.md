## Event bus
* Whenever someone creates a posts or comments, it will emit an event over Event-Bus.
* It will trigger a post request to all the service once, something is created i.e. post or comment.

# post event request
* once POST /events is triggered, it will trigger following three request to each services.
* POST to localhost:4000/events -> posts
* POST to localhost:4001/events -> comments
* POST to localhost:4002/events -> 

## To run a event-bus
* npm start
* Posts service will run on 4005 port.
