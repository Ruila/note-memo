---
sidebar_position: 1
title: "[net] CORS"
---

# [net] CORS

## Intro

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## What requests use CORS?

This cross-origin sharing standard can enable cross-origin HTTP requests for:

+ Invocations of the **XMLHttpRequest** or **Fetch APIs**, as discussed above.
+ Web Fonts (for cross-domain font usage in @font-face within CSS), so that servers can deploy TrueType fonts that can only be loaded cross-origin and used by web sites that are permitted to do so.
+ WebGL textures.
+ Images/video frames drawn to a canvas using drawImage().
+ CSS Shapes from images.


## Prefilght

### What is preflight?

CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.

In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

### When will trigger preflight ?

When request is not simple request. like:

+ http method is not `GET`, `POST`, `HEAD`
+ Content-type is not `text/plain`, `multipart/form-data`, or `application/x-www-form-urlencoded`.
+ Apart from the headers automatically set by the user agent.

### What’s the reasoning behind preflight requests?

Since CORS was proposed after the SOP had been in place for some time, the idea of using preflight requests presented some advantages. With preflight requests, **servers can examine requests before they’re executed and get a chance to indicate if they allow them**.

If there is a side effect to a particular request which a server doesn’t allow from another origin; the preflight request helps to protect the unconsenting servers by checking first and blocking the request if the server responds with headers that indicate its refusal. In addition to this, servers may change what kind of requests and headers they allow as they’re developed. With preflight requests in place, browsers can check this and adjust accordingly.

Finally, CORS is backward compatible. Some older servers which may have been relying on SOP and do not handle CORS are still protected using this method because the browser will treat servers that send no CORS headers the same as servers that only allow requests from the same origin.

## How to avoid CORS?

+ embed it in the script tag, like using **JSONP**. (has limitation)
+ add CORS header in backend. (best practices)
+ proxy server(ex: use own backend server to request data, and send it to frontend.). (best practices)

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#what_requests_use_cors) - CORS
+ @ [huli](https://blog.huli.tw/2021/02/19/cors-guide-2/) - CORS 完全手冊（二）：如何解決 CORS 問題？
+ @ [baeldung](https://www.baeldung.com/cs/cors-preflight-requests) - Cross-Origin Resource Sharing and Why We Need Preflight Requests
