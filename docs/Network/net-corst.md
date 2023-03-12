---
sidebar_position: 1
title: "[net] CORS"
---

# [net] CORS

## Intro

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## Prefilght

### What is preflight?

CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.

In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

### When will trigger preflight ?

When request is not simple request. like:

+ http method is not `GET`, `POST`, `HEAD`
+ Content-type is not `text/plain`, `multipart/form-data`, or `application/x-www-form-urlencoded`.
+ Apart from the headers automatically set by the user agent.

## How to avoid CORS?

+ embed it in the script tag, like using **JSONP**. (has limitation)
+ add CORS header in backend. (best practices)
+ proxy server(ex: use own backend server to request data, and send it to frontend.). (best practices)

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#what_requests_use_cors) - CORS
+ @ [huli](https://blog.huli.tw/2021/02/19/cors-guide-2/) - CORS 完全手冊（二）：如何解決 CORS 問題？
