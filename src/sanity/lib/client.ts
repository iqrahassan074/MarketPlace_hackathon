// import { createClient } from 'next-sanity'


// export const client = createClient({
//   projectId: "pbl5pxzd", 
//   dataset: "production",  
//   apiVersion:"2023-01-01",
//   useCdn: true,
//   token: "skx78wh3FQklNtLtrrwZxoDZcNSszdPnKqfjcB8lLHAskWy4n8xbHdulwEUuJ0lubnubQuGqymsIiiGMXlMBjS29F3DZz27RYPKcbg5d1xSNUOSWCpsNPX4DBjUJ6jBFy1ethdFd1ezIgNttnPIQ0lOFfRpqdvbrA44wcuRYYVnqd5rkWHga",
// })






import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "pbl5pxzd",   
  dataset: "production",   
  
  apiVersion: "2023-01-01",  
  useCdn: true,             
  token: "skx78wh3FQklNtLtrrwZxoDZcNSszdPnKqfjcB8lLHAskWy4n8xbHdulwEUuJ0lubnubQuGqymsIiiGMXlMBjS29F3DZz27RYPKcbg5d1xSNUOSWCpsNPX4DBjUJ6jBFy1ethdFd1ezIgNttnPIQ0lOFfRpqdvbrA44wcuRYYVnqd5rkWHga",  
})
