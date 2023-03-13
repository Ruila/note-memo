---
sidebar_position: 1
title: "[net] HTTP"
---

:::caution

This is not original content, but just a note from articles I read.

:::


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

## SSL

### Intro

SSL stands for **Secure Sockets Layer** and, in short, it's the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two systems, preventing criminals from reading and modifying any information transferred, including potential personal details.

### How does it work ?

1. SSL starts to work after the TCP connection is established, initiating what is called an SSL handshake.

2. The server sends its certificate to the user along with a number of specifications (including which version of SSL/TLS and which encryption methods to use, etc.).

3. The user then checks the validity of the certificate, and selects the highest level of encryption that can be supported by both parties and starts a secure session using these methods. There are a good number of sets of methods available with various strengths - they are called cipher suites.

4. To guarantee the integrity and authenticity of all messages transferred, SSL and TLS protocols also include an authentication process using message authentication codes (MAC). All of this sounds lengthy and complicated but in reality it's achieved almost instantaneously.

## TLS

### Intro

TLS (Transport Layer Security) is just an updated, more secure, version of SSL.

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#components_of_http-based_systems) - HTTP
+ @ [techtarget](https://www.techtarget.com/searchsoftwarequality/definition/HTTPS) - Hypertext Transfer Protocol Secure (HTTPS)
