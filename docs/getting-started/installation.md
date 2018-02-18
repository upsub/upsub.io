# Installation

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Installation

#### Requirements

asdgasdg

#### Docker Compose

```sh
docker login
```

```yaml
version: "3"
services:
  your-service:
    build: .
    ports:
     - "3000:3000"

  upsub:
    image: "upsub/dispatcher"
    ports:
      - "4999:4999"
```
