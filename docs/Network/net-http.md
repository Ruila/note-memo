---
sidebar_position: 1
title: "[net] HTTP"
---

# [net] HTTP

## Intro

HTTP is a protocol for fetching resources such as HTML documents.

It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time.

It is an application layer protocol that is **sent over TCP**, or **over a TLS-encrypted TCP connection**, though any reliable transport protocol could theoretically be used.

## What is HTTPS

HTTPS is not a separate protocol from HTTP.

Rather, it is a **variant** that uses **Transport Layer Security (TLS)**/**Secure Sockets Layer (SSL)** encryption **over HTTP** to secure communications.

When a web server and web browser talk to each other over HTTPS, they engage in what's known as a handshake -- an exchange of TLS/SSL certificates -- to verify the provider's identity and protect the user and their data.

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#components_of_http-based_systems) - HTTP
+ @ [techtarget](https://www.techtarget.com/searchsoftwarequality/definition/HTTPS) - Hypertext Transfer Protocol Secure (HTTPS)
