const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser());
app.use('/:lang', express.static('public', { index: false }));


const urlArr = ['/', '/:page', '/:lang/:page'];


app.get('/favicon.ico', (req, res) => res.status(204)); // Ignore favicon request.

app.get(urlArr, function(req, res, next) {

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0"); // Proxies.

  let page;
  let lang;

  if (req.params.page) {
    page = req.params.page;

    if ((page === 'tr' || page === 'en') &&
        !req.params.lang) {
      lang = page;

      if (!req.originalUrl.endsWith('/')) return res.redirect(301, req.originalUrl + '/');
      else if (req.cookies.lang !== lang) res.cookie('lang', lang);
      
      page = 'index';

    } else if (['furniture', 
                'industrial-design',
                'about',
                'contact'].includes(page)) {
      if (!req.params.lang) {
        if (req.cookies.lang) return res.redirect(301, `/${req.cookies.lang}/${page}`);
        else return res.redirect(301, `/tr/${page}`);
        
      } else if (req.params.lang === 'tr' || req.params.lang === 'en') {
        lang = req.params.lang;

        if (req.originalUrl.endsWith('/')) return res.redirect(301, `/${lang}/${page}`);
        else if (req.cookies.lang !== lang) res.cookie('lang', lang);
        
      } else return next();
    } else return next();

  } else {
    if (req.cookies.lang) return res.redirect(301, `/${req.cookies.lang}/`);
    else return res.redirect(301, '/tr/');
  }

  res.locals.pageType = (page === 'index' ? 'homepage' : 'subpage');
  res.locals.header = require(`./text_modules/${lang}/header-${lang}`);
  res.locals.langChange = (lang === 'tr' ? '/en' : '/tr');
  res.locals.content = require(`./text_modules/${lang}/${page}-${lang}`);

  res.render(page);


  console.log(`Page request is responded with: ${lang}/${page}`);
});


app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'), function(err) {
    if (err) throw err;
    else console.log('404 page not found error sent');
  });
});


app.listen(port, function() {
  console.log('Server is listening at: http://localhost:', port);
});
