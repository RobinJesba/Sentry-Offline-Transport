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
    integrity="sha384-Kl6Y90+qOGXFISnB2uX+f/+fgueW0VdsRWpEh9wXsTacad+zDLgOWNjgiqsgYO5i" 
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
