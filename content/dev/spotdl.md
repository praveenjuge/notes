---
title: "SpotDL Download"
---

## Install [spotdl](https://spotdl.github.io/spotify-downloader/installation/):

```
pip3 install spotdl
```

```
brew install ffmpeg
```

## Download Liked songs (This will take a while to start):

```
python3 -m spotdl sync saved --user-auth --save-file liked.sync.spotdl
```

## Sync with already downloaded songs:

```
python3 -m spotdl sync liked.sync.spotdl --user-auth
```

More usage instructions: https://spotdl.github.io/spotify-downloader/usage/
