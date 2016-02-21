# Boxtrip by RandomWalker
Install dependencies
```bash
$ bundle install
```

Setup Database
```bash
$ rake db:create db:migrate db:seed
```
Remove ```db:create``` if database exists

## Run Server
```bash
$ rails server
```

## Rspec tests
Prepare DB test
```bash
$ rake db:test:prepare
```

Run Tests
```bash
$ rspec
```

## mailcatcher
Run mailcatcher
```bash
$ mailcatcher
```
* Go to http://localhost:1080/
* Send mail through smtp://localhost:1025

## Test API endpoints on browser
You can use Rest Easy for Firefox or Postman for Chrome

e.g. Test user login endpoint  
With the server running:
* Paste user login url
* Select POST type request
* Add params
* Send

If the params are valids the service response with the model serialized like this:
```json
{
  "id": 1,
  "email": "user@example.com",
  "created_at": "2015-08-05T00:11:54.735-05:00",
  "updated_at": "2015-08-19T21:02:13.274-05:00",
  "access_token": "1:Bf2dssKaoaNHupyDdxbV",
  "username": "test"
}
```

If the params aren't valids the response looks like this:
```json
{
  "error": "Necesitas iniciar sesión o registrarte antes de continuar."
}
```
![Alt text](/public/assets/readme/test_browser.png "Optional title")
