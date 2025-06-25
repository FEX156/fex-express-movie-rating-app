## ALL ENDPOINTS

- http://localhost:5000/tmdb/api/thumbnails/all/trending/day

## MOVIES ENDPOINTS

- http://localhost:5000/tmdb/api/thumbnails/movies/popular/1
- http://localhost:5000/tmdb/api/thumbnails/movies/nowPlaying/1
- http://localhost:5000/tmdb/api/thumbnails/movies/top_rated/1
- http://localhost:5000/tmdb/api/thumbnails/movies/upcoming/1

## TV ENDPOINTS

- http://localhost:5000/tmdb/api/thumbnails/tv/popular/1
- http://localhost:5000/tmdb/api/thumbnails/tv/airing_today/1
- http://localhost:5000/tmdb/api/thumbnails/tv/on_tv/1
- http://localhost:5000/tmdb/api/thumbnails/tv/top_rated/1

## EXAMPLE RESPONSE

### GET : Popular movies

#### Response: Succes ✅

```json
{
  "succes": true,
  "category": "popular",
  "page": "1",
  "movie_list": [
    {
      "movie_id" : 574475,
      "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
      "title": "Final Destination Bloodlines",
      "release_date": "2025-05-14",
      "vote_average": 7.223
    },
    ...
  ]
}
```

#### Response: Failed ❌

```json
{
  "succes": false,
  "message": "Request failed with status code 400"
}
```
