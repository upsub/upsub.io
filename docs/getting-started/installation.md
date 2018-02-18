# Installation
This section will describe how to install and get the UpSub Dispatcher up and
running.

#### Requirements
The UpSub Dispatcher are only build as a docker-image for now and requires that
you have docker installed on the host system.
> UpSub will be available as a binary at a latter state.

#### Start the Dispatcher
The Dispatcher image is available through docker hub and can simply be installed
and run by the command below.
```sh
docker run -d -p 4400:4400 upsub/dispatcher
```
This starts a Dispatcher instance which is exposed on port `4400`. You can
follow the Dispatchers log by connecting to the image via the docker cli command
`logs`.
```sh
docker logs -f <image-id>
```

#### Docker Compose
The best way to get the Dispatcher integrated in your development environment
is to use [docker-compose](https://docs.docker.com/compose/overview/).
Down below is an example of a simple `docker-compose.yml` that configures a dispatcher instance.
```yml
version: '3'
services:
  upsub:
    image: upsub/dispatcher
    ports:
      - '4400:4400'
```

[>> Continue with Configuration](/getting-started/configuration)
