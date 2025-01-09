# deployment notes

for local development: in index.html -> href="/bedrumor/"
run the following command inside angapp:
ng deploy --base-href='//bedrumor\' --repo=https://github.com/lamngo13/bedrumor.git
ALSO
locally, assets (aka images) will have a ../../ preceding their filepath, but that will not be the case for deployment
local: ../../assets/img/logopt2.png
deployment: assets/img/logopt2.png
------
main is the branch for deployment

dev is the optimal branch for tracking - but not w the tweaks for deployment

-----

NOTE some assets are not loading - strange!


ng deploy --base-href='//son' --repo=https://github.com/lamngo13/son.git

Index.html Base href=”/” for local development but for deployment otherwise

End url: https://lamngo13.github.io/son/

Problem is the page is blank

THIS WORKS: ng deploy --base-href='//son' --repo=https://github.com/lamngo13/son.git In index.html: Base href=”/son/” https://lamngo13.github.io/son/

ng deploy --base-href='//bedrumor' --repo=https://github.com/lamngo13/bedrumor.git

Deploying: https://github.com/angular-schule/angular-cli-ghpages#cname https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

FOR DEPLOYING IMAGES/RESOURCES the filepath MAY need to be different for deploying vs local.  Also maybe file extension case sensitive??


# dev notes
upcoming events

calendar

links

gallery

make it look pretty 

find a color scheme

deploy

make it work on mobile

for the game: connect Laz to Ryan

PAYMENT: and query//lock system for inventory and stock
