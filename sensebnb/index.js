addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  /**
   * Respond to the request
   * @param {Request} request
   */
  async function handleRequest(r) {
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://sensechicago.myshopify.com/admin/api/2020-10/orders.json',
      'headers': {
        'Authorization': 'Basic Y2YwN2Q2NzEzMTJmYjg4Zjk0OWEwNDU5ZDRlZTYyNTc6c2hwcGFfMDI0NzIyOTJkMzkwYzA3OTVhZGMwZDliM2I0ZDA0YTY=',
        'Cookie': '_secure_admin_session_id=5a3b07cefc82c66d82f8861972ee96f6; _secure_admin_session_id_csrf=5a3b07cefc82c66d82f8861972ee96f6'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  
    // if (response.status === 200) {
      return new Response('Good', {status: 200});
    // } else {
    //   return new Response(response.statusText, {status: response.status});
    // }
  
  }