# Profiles for RCCT


## Contributing
### Frontend
After cloning the repository, ensure you have node installed on your computer and run the following command to install node modules.
```
cd frontend
```
then
```
npm install
```
Following this, run:
```
npm start
```
This will insure the code runs correctly in your browser.

Next, create a separate branch to avoid merge conflict within the main branch. When updates are added, commit to the branch and submit a pull request. Make sure at least one person reviews prior to merging.

### Backend
Note: You will need docker (https://www.docker.com/products/docker-hub/) and the Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli) installed. I will also need to add you as a collaborator on Heroku.

If you make changes to the server, run
```shell
docker build -t backend . 
# or if using mac M1
docker buildx build --platform linux/amd64 -t backend . 
```
then:
```
docker tag backend registry.heroku.com/rcct-profiles/web 

docker push registry.heroku.com/rcct-profiles/web  

heroku container:release web -a rcct-profiles  
```
