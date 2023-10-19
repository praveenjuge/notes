---
title: "Terminal Commands"
---

Hugo:

```sh
hugo server

hugo --minify

hugo server --bind 0.0.0.0 --baseURL http://192.168.1.3:1313

hugo new site . --force
```

List all globally installed NPM Modules:

```sh
npm ls -gp --depth=0
```

Remove Globally Installed Packages:

```sh
npm uninstall -g pkg-name
```

Python Simple Server:

```sh
# If Python version is 3.X
# On windows try "python" instead of "python3", or "py -3"
python3 -m http.server
python3 -m http.server 3000

# If Python version is 2.X
python -m SimpleHTTPServer
python -m SimpleHTTPServer 3000
```

Flush/Clear DNS Cache:

```sh
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

Netlify Push:

```sh
npm run production && netlify deploy --prod --dir "docs/public"
```

Node Modules Refresh:

```sh
rm -rf node_modules && npm i
```

HN Rails:

Foreman:

```sh
mysql.server start && npx kill-port 3000 && git pull upstream && yarn && bundle install && rails db:migrate && gem install foreman && foreman start -p 3000
```

Rails:

```sh
mysql.server start && npx kill-port 3000 && git pull upstream && yarn && bundle install && rails db:migrate && rails server
```

Webpack:

```sh
bin/webpack-dev-server
```

GitHub Release:

```sh
release-it --github.release
```

Torrent Link:

```sh
tplay 'magnet:?xt=urn:btih:'
```

ffmpeg Live Steam Download:

```sh
ffmpeg -i https://URL.m3u8 -c copy -bsf:a aac_adtstoasc output.mp4
```

Download Website:

```sh
brew install wget
```

```sh
wget --recursive --page-requisites --adjust-extension --span-hosts --convert-links --restrict-file-names=windows --no-parent https://www.example.com

wget \
 --recursive \ # Download the whole site.
--page-requisites \ # Get all assets/elements (CSS/JS/images).
--adjust-extension \ # Save files with .html on the end.
--span-hosts \ # Include necessary assets from offsite as well.
--convert-links \ # Update links to still work in the static version.
--restrict-file-names=windows \ # Modify filenames to work in Windows as well.
--domains example.com \ # Do not follow links outside this domain.
--no-parent \ # Don't follow links outside the directory you pass in.
https://www.example.com # The URL to downloads
```

XCode:

```sh
xcode-select --install
```

Websites to Block:

```sh
0.0.0.0 9gag.com
0.0.0.0 www.9gag.com
0.0.0.0 blogspot.com
0.0.0.0 www.blogspot.com
0.0.0.0 tumblr.com
0.0.0.0 www.tumblr.com
0.0.0.0 itch.io
0.0.0.0 www.itch.io
0.0.0.0 reddit.com
0.0.0.0 m.reddit.com
0.0.0.0 old.reddit.com
0.0.0.0 www.reddit.com
0.0.0.0 imgur.com
0.0.0.0 m.imgur.com
0.0.0.0 www.imgur.com
0.0.0.0 youtube.com
0.0.0.0 m.youtube.com
0.0.0.0 www.youtube.com
0.0.0.0 music.youtube.com
0.0.0.0 twitter.com
0.0.0.0 m.twitter.com
0.0.0.0 www.twitter.com
0.0.0.0 mobile.twitter.com
```

Webpack Analyzer

```sh
rm -rf stats.json
RAILS_ENV=production npx webpack --config ./config/webpack/production.js --json > stats.json
npx webpack-bundle-analyzer stats.json
```
