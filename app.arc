@app
begin-app

@static

@http
get /api
get /test

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
