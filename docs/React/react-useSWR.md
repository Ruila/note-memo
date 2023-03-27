---
title: "[React] useSWR"
---

# [React] useSWR

## What is SWR

The name **“SWR”** is derived from **stale-while-revalidate**, **a HTTP cache invalidation strategy** popularized by [HTTP RFC 5861](https://www.rfc-editor.org/rfc/rfc5861).
**SWR** is a strategy to first return the data from **cache (stale)**, then send the **fetch request (revalidate)**, and finally come with the up-to-date data.

## useSWR

Vercel created a library called [SWR](https://swr.vercel.app/) for Data Detching.

### Overview

```javascript
import useSWR from 'swr'
 
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

### Features

SWR has you covered in all aspects of speed, correctness, and stability to help you build better experiences:

+ Fast page navigation
+ Polling on interval
+ Data dependency
+ Revalidation on focus
+ Revalidation on network recovery
+ Local mutation (Optimistic UI)
+ Smart error retry
+ Pagination and scroll position recovery
+ React Suspense
And a lot [more](https://swr.vercel.app/docs/getting-started).

## Reference

+ @ [KyleMo](https://medium.com/onedegree-tech-blog/%E4%BA%86%E8%A7%A3-swr-%E7%9A%84%E9%81%8B%E4%BD%9C%E6%A9%9F%E5%88%B6-how-these-async-state-managers-work-6236fc4f9f6) - 了解 SWR 的運作機制，How this async state manager works ?
+ @ [vercel](https://swr.vercel.app/docs/getting-started) -swr
+ @ [TkDodo's blog](https://tkdodo.eu/blog/react-query-as-a-state-manager) -React Query as a State Manager
+ @ [jianshu](https://www.jianshu.com/p/2771cb695c81) -requestIdleCallback和requestAnimationFrame详解
+ @ [Cloudflare](https://developers.cloudflare.com/cache/about/default-cache-behavior/) - Default Cache Behavior
