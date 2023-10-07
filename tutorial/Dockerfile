from pandoc/extra:latest-ubuntu

env DEBIAN_FRONTEND=noninteractive
env texhome=texmf/tex/latex
env arguelles_theme=https://github.com/piazzai/arguelles/archive/refs/heads/master.zip
env arguelles_file="arguelles.zip"

run apt-get update && apt-get install -y --no-install-recommends \
    curl \
    texlive-latex-extra \
    unzip && \
    tlmgr update --self && \
    tlmgr update --all

# beamertheme-arguelles doesn't correctly install the theme
run mkdir -p ~/$texhome && \
    curl -L $arguelles_theme > $arguelles_file && \
    unzip $arguelles_file && \
    cp arguelles-master/*.sty ~/$texhome/ && \
    rm -rf arguelles-master $arguelles_file

run tlmgr install \
    alegreya \
    eulervm \
    mathalpha \
    microtype \
    fontawesome5 \
    opencolor \
    enumitem \
    parskip \
    pgf \
    fontaxes
