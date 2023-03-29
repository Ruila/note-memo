---
title: "[Docker] Initialize database"
---

# [Docker] Initialize database

The methods of initializing Database with docker in the local environment.

## 1. Copy sql script to /docker-entrypoint-initdb.d

#### Prepare your sql like:
```sql title=init.sql
CREATE TABLE public.users
(
    id serial NOT NULL,
    name varchar UNIQUE,
    password varchar,
    created_at timestamp(3) without time zone DEFAULT LOCALTIMESTAMP,
    updated_at timestamp(3) without time zone DEFAULT LOCALTIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO public.users (name, password)
VALUES ('root', 'root');
```

#### Copy to docker

```yaml
version: '3.8'
services:
  api:
    container_name: api
    restart: always
    build: .
    ports:
      - ${PORT}:${PORT}
    depends_on:
      - db
    volumes:
      - .:/usr/src/app

  db:
    container_name: postgres
    image: postgres
    ports:
      - '5432:${DB_PORT}'
    volumes:
      - data:/data/db
      # copy the sql script to create tables
      - ./init.sql:/docker-entrypoint-initdb.d/create_tables.sql
    environment:
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
      - POSTGRES_USER=${DB_USER}

volumes:
  data: {}

```
#### then run `docker-compose up -d`, you can see the `public.users` table.

#### -> [Demo](https://github.com/Ruila/url-shortener-backend)
