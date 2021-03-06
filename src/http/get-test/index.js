exports.handler = async function http (req) {
  console.log('test API called')
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      msg: 'Hello from Svelte + your test API!'
    })
  }
}
