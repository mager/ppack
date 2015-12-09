## ppack

Built for Brandon Dickstein.

![Screenshot as of 12/8/15](ppack-screenshot.png)

## Email contact form

The contact form on the site uses Sendgrid. To set it up on a Heroku machine, you must add your config vars:

     $ heroku config:set SENDGRID_USERNAME="Your username" SENDGRID_PASSWORD="Your password"

TODO:

* Make the form more secure
