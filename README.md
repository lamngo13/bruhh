# deployment notes
ng deploy --base-href='//son' --repo=https://github.com/lamngo13/son.git

Index.html Base href=”/” for local development but for deployment otherwise

End url: https://lamngo13.github.io/son/

Problem is the page is blank

THIS WORKS: ng deploy --base-href='//son' --repo=https://github.com/lamngo13/son.git In index.html: Base href=”/son/” https://lamngo13.github.io/son/

Deploying: https://github.com/angular-schule/angular-cli-ghpages#cname https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
