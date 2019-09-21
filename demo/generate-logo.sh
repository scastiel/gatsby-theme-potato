#!/bin/sh

SOURCE_FILE="content/assets/avatar.png"
DEST_FILE="content/assets/logo.png"
SIZE=500
COLOR="hsl(0, 75%, 50%)"
OFFSET=20

center=$(($SIZE / 2))
circle="circle $center,$center $center,$OFFSET"
convert -size ${SIZE}x${SIZE} xc:none \
  -fill "$COLOR" -draw "$circle" \
  -fill "$SOURCE_FILE" -draw "$circle" \
  "$DEST_FILE"
