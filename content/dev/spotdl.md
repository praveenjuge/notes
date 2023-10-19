---
title: "SpotDL Download"
---

## Install [spotdl](https://spotdl.github.io/spotify-downloader/installation/):

```sh
pip3 install spotdl
```

```sh
brew install ffmpeg
```

## Download Liked songs (This will take a while to start):

```sh
python3 -m spotdl sync saved --user-auth --save-file liked.sync.spotdl
```

## Sync with already downloaded songs:

```sh
python3 -m spotdl sync liked.sync.spotdl --user-auth
```

More usage instructions: https://spotdl.github.io/spotify-downloader/usage/
