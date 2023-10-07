#!/usr/bin/env bash

docker run --rm \
    -v $(pwd):/data \
    pandoc -t beamer talk.md -o pres.pdf -H header.tex --highlight-style pygments
