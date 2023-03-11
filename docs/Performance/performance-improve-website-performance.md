---
sidebar_position: 1
title: "How to improve website's performance ?"
---

# How to improve website's performance ?

> @ [yahoo! developer](https://developer.yahoo.com/performance/rules.html#css_top) - Best Practices for Speeding Up Your Web Site

### 1. Minimize HTTP Requests

Most of the time when user review the website, the browser will download the files or get data through http/https requests.

Hence, reducing the size and the number of times of http/https requests will be a good way to speed up the loading time.

### 2. Use a Content Delivery Network

A content delivery network (CDN) is a collection of web servers distributed across multiple locations to deliver content more efficiently to users. 

The server selected for delivering content to a specific user is typically based on a measure of network proximity. For example, the server with the fewest network hops or the server with the quickest response time is chosen.

### 3. Add an Expires or a Cache-Control Header

There are two aspects to this rule:

+ For static components: implement "Never expire" policy by setting far future Expires header

+ For dynamic components: use an appropriate Cache-Control header to help the browser with conditional requests

Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page.

A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable.

This avoids unnecessary HTTP requests on subsequent page views.

Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.

### 4. Gzip Components

Compression reduces response times by reducing the size of the HTTP response.

### 5. Put Stylesheets at the Top

While researching performance at Yahoo!, we discovered that moving stylesheets to the document HEAD makes pages appear to be loading faster.

This is because putting stylesheets in the HEAD allows the page to render progressively.

:::info

It can avoid FOUC(Flash Of Unstyled Content).

:::

### 6. Avoid CSS Expressions

The problem with css expressions is that they are evaluated more frequently than most people expect.

Not only are they evaluated when the page is rendered and resized, but also when the page is scrolled and even when the user moves the mouse over the page.

Adding a counter to the CSS expression allows us to keep track of when and how often a CSS expression is evaluated.

Moving the mouse around the page can easily generate more than 10,000 evaluations.

### 7. Make JavaScript and CSS External

Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser.

JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested.

This reduces the number of HTTP requests that are needed, but increases the size of the HTML document.

On the other hand, if the JavaScript and CSS are in external files **cached** by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.

The **only exception** where inlining is preferable is with home pages. Home pages that have few (perhaps only one) page view per session may find that inlining JavaScript and CSS results in faster end-user response times.

### 8. Reduce DNS Lookups

### 9. Minify JavaScript and CSS

### 10. Reduce Cookie Size

:::info

Cookies will be sent with every request automatically.

:::

HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers.

It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.

For more information check "When the Cookie Crumbles" by Tenni Theurer and Patty Chi. The take-home of this research:

+ Eliminate unnecessary cookies
+ Keep cookie sizes as low as possible to minimize the impact on the user response time
+ Be mindful of setting cookies at the appropriate domain level so other sub-domains are not affected
+ Set an Expires date appropriately. An earlier Expires date or none removes the cookie sooner, improving the user response time.
