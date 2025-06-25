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
    "original_title": "Final Destination Bloodlines",
    "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    "release_date": "2025-05-14",
    "tagline": "Death runs in the family.",
    "genres": "Horror, Mystery",
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
      "adult": false,
      "gender": 1,
      "id": 3480304,
      "known_for_department": "Acting",
      "name": "Kaitlyn Santa Juana",
      "original_name": "Kaitlyn Santa Juana",
      "popularity": 8.2224,
      "profile_path": "/75Tdc3wg9mklJHy5LEj8OMjcPw8.jpg",
      "cast_id": 18,
      "character": "Stefani Reyes",
      "credit_id": "65f212be2fe2fa0148ecb133",
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
      "id": 574475,
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
      "adult": false,
      "backdrop_path": "/i8fiqKaQklF02VmQYhSxmwa8KOH.jpg",
      "genre_ids": [
        9648,
        10749,
        53
      ],
      "id": 223,
      "original_language": "en",
      "original_title": "Rebecca",
      "overview": "Story of a young woman who marries a fascinating widower only to find out that she must live in the shadow of his former wife, Rebecca, who died mysteriously several years earlier. The young wife must come to grips with the terrible secret of her handsome, cold husband, Max De Winter. She must also deal with the jealous, obsessed Mrs. Danvers, the housekeeper, who will not accept her as the mistress of the house.",
      "popularity": 2.2364,
      "poster_path": "/1qz3qUOHnVy7dL7M7G8jSErxE4b.jpg",
      "release_date": "1940-03-23",
      "title": "Rebecca",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 1831
    },
    ...
  ]
}
```
