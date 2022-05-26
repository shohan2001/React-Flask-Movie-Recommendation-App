# React.js + Flask Movie Recommendation System

![Python](https://img.shields.io/badge/Python-3.9.6-blueviolet) ![Framework](https://img.shields.io/badge/Framework-Flask-red) ![Frontend](https://img.shields.io/badge/Frontend-React-green) ![API](https://img.shields.io/badge/API-TMDB-fcba03)

Link to live project : https://mov-shohan.herokuapp.com/

![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg) ![Website shields.io](https://img.shields.io/badge/website-up-yellow)

---

## Installation 📦

1. Clone or download this repository to your local machine.
2. Install all the libraries mentioned in the [requirements.txt]
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

## Features 📋

-   Users can for find the most popular movies on the home page.
-   Users can search for various movies and look through its details like cast, rating, release date etc and also watch it's trailer directly.
-   User will get recommendations based on the current movie they have searched for using content based filtering.

---

## Architecture :page_facing_up:

![image](https://user-images.githubusercontent.com/74367889/170507933-fabe5dcc-52a0-476f-8650-c454a433bc48.png)

---

## Algorithm
