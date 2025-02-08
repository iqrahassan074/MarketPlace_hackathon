// import { createClient } from "next-sanity";

// const client = createClient({
//   projectId: "pbl5pxzd", 
//   dataset: "production", 
//   useCdn: true, 
//   apiVersion: "2023-10-10", 
//   token: "skx78wh3FQklNtLtrrwZxoDZcNSszdPnKqfjcB8lLHAskWy4n8xbHdulwEUuJ0lubnubQuGqymsIiiGMXlMBjS29F3DZz27RYPKcbg5d1xSNUOSWCpsNPX4DBjUJ6jBFy1ethdFd1ezIgNttnPIQ0lOFfRpqdvbrA44wcuRYYVnqd5rkWHga",
// });

// export async function sanityfetch({ query, Promise = {} }: { query: string; Promise?: any }) {
//   return await client.fetch(query, Promise);
// }












import { createClient } from "next-sanity";

const client = createClient({
  projectId: "pbl5pxzd",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
  token: "skx78wh3FQklNtLtrrwZxoDZcNSszdPnKqfjcB8lLHAskWy4n8xbHdulwEUuJ0lubnubQuGqymsIiiGMXlMBjS29F3DZz27RYPKcbg5d1xSNUOSWCpsNPX4DBjUJ6jBFy1ethdFd1ezIgNttnPIQ0lOFfRpqdvbrA44wcuRYYVnqd5rkWHga",
});

export async function sanityfetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>; 
}) {
  return await client.fetch(query, params);
}



















