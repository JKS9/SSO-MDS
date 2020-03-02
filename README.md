# SSO-MDS
instalation obligatoire :
[passport](http://www.passportjs.org/docs/)

## Facebook
1- Aller configurer votre profile développement [config facebook dev](https://developers.facebook.com/apps/)


2 - créer un fichier oauth.js
```javascript
var id = {
    google : {
        clientid :     'client id facebook',
        clientSecret : 'client Secret Fac ebook',
        callbackUrl : 'http://localhost:3000/auth/callback',
    }
};

module.exports = id;
```

3 - utilisation 
```bash
node app.js
```


## Google
1- Aller configurer votre profile développement [config Google api](https://console.developers.google.com/apis/)


2 - créer un fichier oauth.js
```javascript
var id = {
    google : {
        clientid :     'client id google',
        clientSecret : 'client Secret google',
        callbackUrl : 'http://localhost:3000/auth/callback',
    }
};

module.exports = id;
```

3 - utilisation 
```bash
node app.js
```