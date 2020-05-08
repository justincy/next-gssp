# Next.js GSSP

Exploring different getServerSideProps behaviors in Next.js.

## Redirects

Redirects are useful when you detect that the user isn't authenticated
and want to forward the user to the login form instead of attempting
to request data that you know they can't access.

One patter established in the examples ([with-oron-session](https://github.com/zeit/next.js/blob/56633ed6bebf9e4a2bcb3feff2e3de3bd61d1da9/examples/with-iron-session/pages/profile-ssr.js#L35-L48)) is to return the redirect
from `getServerSideProps()`. It shouldn't work (because `gSSP` returns
JSON and it's fetch via AJAX so a redirect won't change the URL), but it
appears to work as we intend.

Why does this work?

1. The browser follows the redirect on the AJAX request
2. Next tries to parse the JSON response which causes an error
   ```
   SyntaxError: Unexpected token < in JSON at position 0
   ```
3. In response to the error, Next forces a page reload
4. The browser again follows the redirect, only this time
   it was for the initial page load so the browser renders
   the response, which is what we want.

That's a very inefficient way to perform a redirect; i.e. you end up
doing it twice.

## Error Handling

Sometimes requests fail. How should those be handled? Returning an
HTTP error code just renders it on the page. That's not what we
want. We'd prefer for our app's error page to be rendered. How can
we do that?
