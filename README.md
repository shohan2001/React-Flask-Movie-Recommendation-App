
# React.js + Flask Movie Recommendation System
![Python](https://img.shields.io/badge/Python-3.9.6-blueviolet)     ![Framework](https://img.shields.io/badge/Framework-Flask-red) ![Frontend](https://img.shields.io/badge/Frontend-React-green) ![API](https://img.shields.io/badge/API-TMDB-fcba03)

## Overview  📋
1. The web app is built using React.js for the front-end and python's  flask for the back-end.
2. It enable user to search and go through various details (like cast, genre, trailer, etc) 5000+ movies (all these details are fetched using an API by TMDB) .
3. Based on the searched movie users are recommended movie which are fetched for the python-flask backend that uses local dataset and content-based filtering algorithm for recommendation.
4. The web-app also allows user to get top movies filtered by genre (these are also fetched using an TMDB api) . 
5. The web app is responsive and can be used on mobile devies.  

![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg) ![Website shields.io](https://img.shields.io/badge/website-up-yellow)


----

## Installation 📦
1. Clone or download this repository to your local machine.
2.  Install all the libraries mentioned in the [requirements.txt] 
    ```shell
    $ pip install -r requirements.txt
    ```
 3. Then run the flask server by 
    ```shell
    $ python app.py
    ```
4. Go to the movie-recommender-app directory and install the node modules and build the project.
    ```shell
    $ cd movie-recommender-app
    $ npm install
    ```
5. Go to the package.json file and change the proxy to your flask server local port which is most likely localhost:5000
6. Then build the project by
    ```shell
    $ npm run build
    ```
7. To the local flask server to start the project
    > localhost :portNumber
    
9. **If this doesn't work** use 
    ```shell
    $ npm start
    ```
     
   


---
## Architecture :page_facing_up:


![image](https://user-images.githubusercontent.com/74367889/170507933-fabe5dcc-52a0-476f-8650-c454a433bc48.png)

---
## Algorithm For Recommendation
The Recommendations are made by computing similarity scores for movies using consine simarity. For each movie tags are created by combining various details like genre of the movie, title, top cast, director and then they are converted to vectors using which similarity matrix is formed. Then for any searched movie the movies with the largest similarity score with it are sorted and then recommended.
### Cosine Similarity 
![image](https://user-images.githubusercontent.com/74367889/170820479-843243b2-3659-4101-8adf-2e5c7cdbcc19.png)



 ---
 ## References 
 1. TMDB's API : https://www.themoviedb.org/documentation/api
 2. Cosine Similarity : https://www.machinelearningplus.com/nlp/cosine-similarity/
