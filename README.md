# Description
* Three micro frontends built with different technologies (React v15, React v0.14, and Angular) wrapped in Web Components
* Integration happen through another high-level Web Component called "Application"
* Micro frontends are referenced using `<link rel="import" href="microfrontend1">`
* The `Application` component is automatically rendered when the main script loads
* CDNs are used for the web components polyfills and bootstrap styling
* Each micro frontend distribution will contain an `index.html` with block styling and the script tag to load its JavaScript dependency.

Note: Ideally these micro frontends will come from remote servers, but take in consideration that most servers will block [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) by default.

# How to
In order to run this project you will need to:
* manually build each `microfrontend` individually using `yarn install`
* install the node modules for the integration app using `yarn install`
* run `yarn start` to build each micro frontend and trigger the dev server instance