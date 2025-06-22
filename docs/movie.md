## ALL ENDPOINTS

- http://localhost:5000/tmdb/api/all/trending/day

## MOVIES ENDPOINTS

### GET : Popular movies

- http://localhost:5000/tmdb/api/movies/now_playing/1

```json
{
  "succes": true,
  "category": "popular",
  "page": "1",
  "movie_list": [
    {
      "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
      "title": "Final Destination Bloodlines",
      "release_date": "2025-05-14",
      "vote_average": 7.223
    },
    {
      "poster_path": "/c32TsWLES7kL1uy6fF03V67AIYX.jpg",
      "title": "Lilo & Stitch",
      "release_date": "2025-05-17",
      "vote_average": 7.115
    },
    {
      "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
      "title": "How to Train Your Dragon",
      "release_date": "2025-06-06",
      "vote_average": 8.05
    },
    {
      "poster_path": "/t3cmnXYtxJb9vVL1ThvT2CWSe1n.jpg",
      "title": "STRAW",
      "release_date": "2025-06-05",
      "vote_average": 8.04
    },
    {
      "poster_path": "/czh8HOhsbBUKoKsmRmLQMCLHUev.jpg",
      "title": "Distant",
      "release_date": "2024-07-12",
      "vote_average": 6.2
    },
    {
      "poster_path": "/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
      "title": "The Amateur",
      "release_date": "2025-04-09",
      "vote_average": 6.955
    },
    {
      "poster_path": "/9TFaFsSXedaALXTzba349euDeoY.jpg",
      "title": "Crazy Lizard",
      "release_date": "2024-03-27",
      "vote_average": 6
    },
    {
      "poster_path": "/7Hk1qxAvZi9H9cfBb4iHkoGjapH.jpg",
      "title": "Candle in the Tomb: The Worm Valley",
      "release_date": "2023-09-22",
      "vote_average": 6.5
    },
    {
      "poster_path": "/m5UBHbEjQJx3AkRZWRY6A4l4ZDT.jpg",
      "title": "Hunt the Wicked",
      "release_date": "2024-02-12",
      "vote_average": 5.571
    },
    {
      "poster_path": "/uFQduVyYIinJy3eLjozgfl6Xtcn.jpg",
      "title": "Diablo",
      "release_date": "2025-06-13",
      "vote_average": 7
    },
    {
      "poster_path": "/2XDQa6EmFHSA37j1t0w88vpWqj9.jpg",
      "title": "Predator: Killer of Killers",
      "release_date": "2025-06-05",
      "vote_average": 8
    },
    {
      "poster_path": "/361hRZoG91Nw6qXaIKuGoogQjix.jpg",
      "title": "28 Years Later",
      "release_date": "2025-06-18",
      "vote_average": 7.2
    },
    {
      "poster_path": "/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg",
      "title": "The Accountant²",
      "release_date": "2025-04-23",
      "vote_average": 7.199
    },
    {
      "poster_path": "/uKWAk4BHzyEOMmLKUDXoIAPhH36.jpg",
      "title": "Life After Fighting",
      "release_date": "2024-06-07",
      "vote_average": 7.15
    },
    {
      "poster_path": "/euM8fJvfH28xhjGy25LiygxfkWc.jpg",
      "title": "Deep Cover",
      "release_date": "2025-06-12",
      "vote_average": 6.799
    },
    {
      "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
      "title": "Sinners",
      "release_date": "2025-04-16",
      "vote_average": 7.6
    },
    {
      "poster_path": "/yef0tY1Nw3BX8PJTfBLieqHj5Hw.jpg",
      "title": "Utopia",
      "release_date": "2024-12-09",
      "vote_average": 5.447
    },
    {
      "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
      "title": "A Minecraft Movie",
      "release_date": "2025-03-31",
      "vote_average": 6.505
    },
    {
      "poster_path": "/8OP3h80BzIDgmMNANVaYlQ6H4Oc.jpg",
      "title": "The Twisters",
      "release_date": "2024-06-28",
      "vote_average": 4.7
    },
    {
      "poster_path": "/tpZdjnoJ6Z3NsSxI6HjAIggrcEv.jpg",
      "title": "Kayara",
      "release_date": "2025-01-02",
      "vote_average": 7.5
    }
  ]
}
```

### GET : Upcoming movies

- http://localhost:5000/tmdb/api/movies/upcoming/1

```json
{
  "succes": true,
  "category": "now playing",
  "page": "1",
  "movie_list": [
    {
      "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
      "title": "Final Destination Bloodlines",
      "release_date": "2025-05-14",
      "vote_average": 7.225
    },
    {
      "poster_path": "/c32TsWLES7kL1uy6fF03V67AIYX.jpg",
      "title": "Lilo & Stitch",
      "release_date": "2025-05-17",
      "vote_average": 7.116
    },
    {
      "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
      "title": "How to Train Your Dragon",
      "release_date": "2025-06-06",
      "vote_average": 8
    },
    {
      "poster_path": "/t3cmnXYtxJb9vVL1ThvT2CWSe1n.jpg",
      "title": "STRAW",
      "release_date": "2025-06-05",
      "vote_average": 8.039
    },
    {
      "poster_path": "/2XDQa6EmFHSA37j1t0w88vpWqj9.jpg",
      "title": "Predator: Killer of Killers",
      "release_date": "2025-06-05",
      "vote_average": 7.995
    },
    {
      "poster_path": "/uFQduVyYIinJy3eLjozgfl6Xtcn.jpg",
      "title": "Diablo",
      "release_date": "2025-06-13",
      "vote_average": 7
    },
    {
      "poster_path": "/361hRZoG91Nw6qXaIKuGoogQjix.jpg",
      "title": "28 Years Later",
      "release_date": "2025-06-18",
      "vote_average": 7.222
    },
    {
      "poster_path": "/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg",
      "title": "The Accountant²",
      "release_date": "2025-04-23",
      "vote_average": 7.2
    },
    {
      "poster_path": "/euM8fJvfH28xhjGy25LiygxfkWc.jpg",
      "title": "Deep Cover",
      "release_date": "2025-06-12",
      "vote_average": 6.781
    },
    {
      "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
      "title": "Sinners",
      "release_date": "2025-04-16",
      "vote_average": 7.553
    },
    {
      "poster_path": "/tpZdjnoJ6Z3NsSxI6HjAIggrcEv.jpg",
      "title": "Kayara",
      "release_date": "2025-01-02",
      "vote_average": 7.5
    },
    {
      "poster_path": "/qcM2sUiAeP4zXwx4ADSvgc9S58k.jpg",
      "title": "K.O.",
      "release_date": "2025-06-05",
      "vote_average": 6.621
    },
    {
      "poster_path": "/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
      "title": "Mission: Impossible - The Final Reckoning",
      "release_date": "2025-05-17",
      "vote_average": 7.2
    },
    {
      "poster_path": "/mKp4euM5Cv3m2U1Vmby3OGwcD5y.jpg",
      "title": "Ballerina",
      "release_date": "2025-06-04",
      "vote_average": 7.072
    },
    {
      "poster_path": "/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
      "title": "28 Days Later",
      "release_date": "2002-10-31",
      "vote_average": 7.239
    },
    {
      "poster_path": "/crX9rSg9EohybhkEe8iTQUCe55y.jpg",
      "title": "The Ugly Stepsister",
      "release_date": "2025-03-07",
      "vote_average": 7.094
    },
    {
      "poster_path": "/3Ey3HuqZdrx1rfxRkfiOXDFtvtl.jpg",
      "title": "Echo Valley",
      "release_date": "2025-06-13",
      "vote_average": 6.449
    },
    {
      "poster_path": "/jfS5KEfiwsS35ieZvdUdJKkwLlZ.jpg",
      "title": "KPop Demon Hunters",
      "release_date": "2025-06-20",
      "vote_average": 8.708
    },
    {
      "poster_path": "/7IEW24vBiZerZrDlgLVSUU3oT1C.jpg",
      "title": "Shadow Force",
      "release_date": "2025-05-01",
      "vote_average": 6.413
    },
    {
      "poster_path": "/srj9rYrjefyWqkLc6l2xjTGeBGO.jpg",
      "title": "Warfare",
      "release_date": "2025-04-09",
      "vote_average": 7.176
    }
  ]
}
```

- http://localhost:5000/tmdb/api/movies/top_rated/1
- http://localhost:5000/tmdb/api/movies/popular/1

## TV ENDPOINTS

- http://localhost:5000/tmdb/api/tv/popular/1
- http://localhost:5000/tmdb/api/tv/airing_today/1
- http://localhost:5000/tmdb/api/tv/on_tv/1
- http://localhost:5000/tmdb/api/tv/top_rated/1
