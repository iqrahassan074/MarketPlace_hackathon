import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: "skx78wh3FQklNtLtrrwZxoDZcNSszdPnKqfjcB8lLHAskWy4n8xbHdulwEUuJ0lubnubQuGqymsIiiGMXlMBjS29F3DZz27RYPKcbg5d1xSNUOSWCpsNPX4DBjUJ6jBFy1ethdFd1ezIgNttnPIQ0lOFfRpqdvbrA44wcuRYYVnqd5rkWHga",
})