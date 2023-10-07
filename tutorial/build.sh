#!/usr/bin/env bash

docker run --rm \
    -v $(pwd):/data \
    tf-talk -t beamer talk.md -o pres.pdf -H header.tex --highlight-style pygments
