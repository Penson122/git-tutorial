
FROM	pandoc/extra:latest-ubuntu
ENV	DEBIAN_FRONTEND	noninteractive
ENV	texhome	texmf/tex/latex
ENV	arguelles_theme	https://github.com/piazzai/arguelles/archive/refs/heads/master.zip
ENV	arguelles_file	"arguelles.zip"
RUN	apt-get update && apt-get install -y \
	--no-install-recommends \
	curl \
	texlive-latex-extra \
	unzip \
	&& tlmgr update --self \
	&& tlmgr update --all
RUN	mkdir -p ~/$texhome \
	&& curl -L $arguelles_theme > $arguelles_file \
	&& unzip $arguelles_file \
	&& cp arguelles-master/*.sty ~/$texhome/ \
	&& rm -rf arguelles-master $arguelles_file
RUN	tlmgr install alegreya eulervm  mathalpha microtype fontawesome5 opencolor enumitem parskip pgf fontaxes fontsize tikzfill pdfcol xstring
RUN	curl -Lo main.zip https://github.com/cab-1729/Pandoc-Themes/archive/refs/heads/main.zip \
	&& unzip main.zip \
	&& mkdir -p ~/.pandoc/templates \
	&& cp Pandoc-Themes-main/*.tex ~/.pandoc/templates \
	&& cp -r Pandoc-Themes-main/pandoc-fonts /usr/share/fonts/ \
	&& rm -rf Pandoc-Themes-main main.zip
