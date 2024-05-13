# Sentry-Offline-Transport

### Build
```
npm run build
```

### Usage
```javascript
<script src="https://***/sentry-offline.js"></script>

<script
    src="https://browser.sentry-cdn.com/7.112.0/bundle.tracing.min.js" 
    integrity="sha384-tO75tve7J2TREkwVp2rTFtji0/60csVvU8RcjND4Td2p9vwwqZg4cJl6b60cfIJn" 
    crossorigin="anonymous"
></script>

<script>
    Sentry.onLoad(function () {
        Sentry.init({
            dsn: "https://***@o0.ingest.sentry.io/0",
            transport: SentryOffline.makeBrowserOfflineTransport(Sentry.makeFetchTransport),
        });
    });
</script>
```
