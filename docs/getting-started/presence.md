# Presence
UpSub support presence detection of the connected clients.
All presence events will flow on the `upsub/presence/>` channel.
Only named connections will send presence notifications, the name should be a
unique key, it could be a uuid or some other format. A simple
name is ok for debugging purposes.
```sh
# Example of how to listen for connection changes

# Is emitted when the connection is established
upsub/presence/<connection-name>/connect

# Is emitted when the connection is dropped
upsub/presence/<connection-name>/disconnect
```
