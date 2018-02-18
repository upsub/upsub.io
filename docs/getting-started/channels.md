# Channels
All messages flowing through the stream are bound to a channel.
Clients publishes- and subscribes to these channels to send or receive messages.
This section will describe how UpSub channels work and should be used.

A channel should be written like a path.
```sh
channel/event
```

#### Wildcards
UpSub supports wildcards, its a flexible way to listen on different channels at
once. We have two wildcard operators `*` matches one part and the `>`
matches multiple parts of the channel.
> Wildcards are not supported in browser environments because of security concerns.

```sh
# Example of channel which matches one part,
# will only match a word on * position.
channel/*/event

# Example of a channel which matches multiple parts,
# matches everything in between channel and event.
channel/>/event
```


[>> Continue with Presence](/getting-started/presence)
