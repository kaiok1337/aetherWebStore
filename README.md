# aetherWebStore
<img width="1792" alt="Screen Shot 2023-01-23 at 3 25 11 AM" src="https://user-images.githubusercontent.com/115902683/214017673-5a490bf7-5162-4233-b332-cd04bbb57522.png">

# related repos
- Frontend application: https://github.com/kaiok1337/aether-front-end
- Backend application: https://github.com/kaiok1337/aether-back-end

# Tech Used
NestJS:
- backend framework for javascript
- utilizes typscript
- allows for scalability with the use of component-like modules

ReactJs:
- frontend javascript library
- very versatile
- allows advanced DOM manipulation

MongoDB:
- noSQL databse
- fast and easy to parse

# Development Approach

This is a site I plan to use professionally in the future so I had to keep scalability in mind. Since it is a site that will mainly be found on social media, it has to be very mobile friendly so I came at it from that angle as well. I tackled the backend side first as I knew that had to be the strong point of the app, and I believe I succeeded in that. Learning a new backend framework was a challenge, I knew that coming in, so I made sure I finished it before the rest.

The frontend does not yet fully utilize all of the backend server's capabilities. For the sake of this project's MVP I knew not every feature was going to be ready. I wanted to at least showcase the bare-bones functionality of the "every-day" user's frontend.

# Installation
- fork and clone both the frontend react app and the backend nestjs app from their respective repositories
- install npm modules
- type nest start into the backend terminal
- configure react api calls to correct localhost and port
- type npm start into the frontend terminal
- presto!

# Unsolved/Ongoing problems
- admin portal has yet to be fully realized
- JWT tokens cannot be read on refresh in current set-up
- products can be added and removed without auth
- stripe payment portal has yet to be added after checkout is selected
- products can only be added one at a time to the cart
- individual items cannot be removed from the cart(whole cart has to be deleted)

# Finished Project Link

https://aetherwave-web-store.herokuapp.com/

