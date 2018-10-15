# photo-gallery-app

## Tooling and Libraries Used
- angular js
- node express
- docker

### Instrutions to run on local enviromenent 

- Clone the repo from https://github.com/manikanta-cse/photo-gallery-app.git or download the zipped solution
- Developed using node(v6.10.1) npm (3.10.10) 
- Do a npm install on the root directoy which will install backend packages
- Do a npm install on public/lib directoy which will install frontend packages
- Install Gulp globally (npm install -g gulp-cli)
- You need to set an enviromental variable (set FLICKR_API_KEY=YOUR_API_KEY), which will be used to fetch data from flickr 
- Now it's time to run the project, do a npm start on the root directory, which will run the bunch of gulp task and opens    the application in your defalt browser

### Instrutions to run on a Dokerized enviromenent

- docker build -t photo-gallery-app
- docker run -d -p 8090:8090 -e FLICKR_API_KEY=YOUR_API_KEY gallery-app

