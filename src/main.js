import SwaggerUI from 'swagger-ui'

SwaggerUI({
  url: window.location.origin + '/openapi-data.yml',
  dom_id: '#swagger'
})

