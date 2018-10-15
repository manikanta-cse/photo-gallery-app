# photo-gallery-app

## Tooling and Libraries Used
- angular js
- bootstrap
- node express
- docker

### Notes

- Choosen angular js to build front-end and node express web-server to serve the front-end
- Used common js format to load dependencies (used browserfiy to work in browser)
- Choosen gulp as a task runner for executing bunch of taks like minification,bundling..
- Insisted to set the enviromental variable for api key which provides better security
- Added a health endpoint which can be hooked up to a monitoring tool
- Dockerized the application 
- Error logging to console (for Dev)

### Instrutions to run on local enviromenent 

- Clone the repo from https://github.com/manikanta-cse/photo-gallery-app.git or download the zipped solution
- Developed using node(v6.10.1) npm (3.10.10) 
- Do a npm install on the root directoy which will install backend packages
- Do a npm install on public/lib directoy which will install frontend packages
- Install Gulp globally (npm install -g gulp-cli)
- You need to set an enviromental variable (set FLICKR_API_KEY=YOUR_API_KEY), which will be used to fetch data from flickr 
- Now it's time to run the app, do a npm start on the root directory, which will run the bunch of gulp task and opens        the application in your defalt browser

### Instrutions to run on a Dokerized enviromenent

- docker build -t photo-gallery-app
- docker run -d -p 8090:8090 -e FLICKR_API_KEY=YOUR_API_KEY gallery-app

