# DETAIL ENDPOINTS

## Detail Informations :

### 1. Movie Detail :

**Endpoints**: (GET) localhost:5000/tmdb/api/movies/{movie_id}

- Sucess Response:

```json
{
  "succes": true,
  "movie_id": 574475,
  "movie_details": {
    "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
    "title": "Final Destination Bloodlines",
    "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    "release_date": "2025-05-14",
    "tagline": "Death runs in the family.",
    "genres": "Horror, Mystery",
    "runtime": 158,
    "trailer_key": "KnWzz0n60pE"
  }
}
```

### 2. Movie Cast :

**Endpoints**: (GET) localhost:5000/tmdb/api/movies/{movie_id}/cast

- Sucess Response:

```json
{
  "succes": true,
  "movie_id": 574475,
  "cast": [
    {
      "gender": 1,
      "original_name": "Kaitlyn Santa Juana",
      "profile_path": "/75Tdc3wg9mklJHy5LEj8OMjcPw8.jpg",
      "character": "Stefani Reyes",
      "order": 0
    },
    ...
  ]
}
```

### 3. Movie Keyword :

**Endpoints**: (GET) localhost:5000/tmdb/api/movies/{movie_id}/keyword

- Sucess Response:

```json
{
  "succes": true,
  "movie_id": 574475,
  "keywords": [
    {
      "id": 1946,
      "name": "restaurant"
    },
    {
      "id": 10292,
      "name": "gore"
    },
    {
      "id": 9663,
      "name": "sequel"
    },
    {
      "id": 10170,
      "name": "premonition"
    },
    {
      "id": 10855,
      "name": "fate"
    },
    {
      "id": 18035,
      "name": "family"
    },
    {
      "id": 34079,
      "name": "death"
    },
    {
      "id": 199686,
      "name": "near-death experience"
    },
    {
      "id": 208992,
      "name": "1960s"
    },
    {
      "id": 240606,
      "name": "cheating death"
    },
    {
      "id": 256183,
      "name": "supernatural horror"
    },
    {
      "id": 315058,
      "name": "horror"
    },
    {
      "id": 342995,
      "name": "teen scream"
    }
  ]
}
```

### 4. Movie Similar :

**Endpoints**: (GET) localhost:5000/tmdb/api/movies/{movie_id}/similar

- Sucess Response:

```json
{
  "succes": true,
  "movie_id": 574475,
  "similar_to": [
    {
      "id": 223,
      "poster_path": "/1qz3qUOHnVy7dL7M7G8jSErxE4b.jpg",
      "release_date": "1940-03-23",
      "title": "Rebecca",
      "vote_average": 7.9,

    },
    ...
  ]
}
```
