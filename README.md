# Base64 URL Decoder & Opener
> Decode a base64 URL (even encoded twice) and open it in the tab to the right.

This is an addon for a niche usage. It decodes a base64 encoded (once or twice) URL and opens the URL in the tab to the right (in background). That's it. No other extraneous functions. You probably don't need this!

Usage: Select a base64 url and right click to invoke the context menu. You will see 2 options: Decode Once & Decode Twice. Select the right option based on how many times the url was encoded. The addon will decode and open it in the right tab.

## Firefox Signing for self distribution:

- Use `web-ext` (`npm install --global web-ext`)
  - https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
- Signing: `web-ext sign --api-key= --api-secret=`
  - Get key and secret from https://addons.mozilla.org/en-US/developers/addon/api/key/
- The process will take 10-15 mins. Wait!
- The output will be in web-ext-artifacts -> .xpi file. (To install, select install addon from file)

## Screenshot of the addon in action
![Base64 URL Decoder & Opener](https://github.com/dvnlgls/Base64UrlDecoder/raw/master/screenshot/contextmenu.png)
