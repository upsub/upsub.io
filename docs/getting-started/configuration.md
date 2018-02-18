# Configuration
UpSub is configurable through environment variables, which will be described in
detail in this section.
> If your just want to test upsub, there is no need to read this section.

#### Base config
Configuration of Dispatcher limits and timeouts.

**`PORT`:**<br>
**Default:** 4400<br>
**Description:** Port which the Dispatcher is exposed.

**`MAX_MESSAGE_SIZE`:**<br>
**Default:** null<br>
**Description:** The maximum size of a message in bytes.<br>

**`CONNECTION_TIMEOUT`:**<br>
**Default:** 10<br>
**Description:** Dispatcher will reject connection attemp if time exceeds the timeout (value is in seconds).

**`READ_TIMEOUT`:**<br>
**Default:** 10<br>
**Description:** Dispatcher will terminate message if it isn't received within the timeout (value is in seconds).

**`WRITE_TIMEOUT`:**<br>
**Default:** 10<br>
**Description:** Diaptcher will terminate message if it couldn't be written within the timeout (value in seconds).

#### Nats config
UpSub can be distributed with the use of <a href="https://nats.io" target="\_blank">NATS</a> to communication
between the Dispatcher nodes.

**`NATS_HOST`:**<br>
**Default:** null<br>
**Description:** Host for the NATS service.

**`NATS_PORT`:**<br>
**Default:** 4222<br>
**Description:** Port for the NATS service.

#### Authentication
Secure your message stream on a per app basis.

**`AUTH_APP_ID`:**<br>
**Default:** null<br>
**Description:** App identifier

**`AUTH_SECRET`:**<br>
**Default:** null<br>
**Description:** Secret key, should be a `SHA256` key.

**`AUTH_PUBLIC`:**<br>
**Default:** null<br>
**Description:** Public key, should be a `SHA256` key (this is required if connection is established from a browser).

**`AUTH_ORIGINS`:**<br>
**Default:** null<br>
**Description:** Comma separated list of allowed hosts (this is required if connection is established from a browser).

[>> Continue with Clients](/getting-started/clients)
