# Next.js GSSP

Exploring different getServerSideProps behaviors in Next.js.

## Redirects

Redirects are useful when you detect that the user isn't authenticated
and want to forward the user to the login form instead of attempting
to request data that you know they can't access.

## Error Handling

Sometimes requests fail. How should those be handled? Returning an
HTTP error code just renders it on the page. That's not what we
want. We'd prefer for our app's error page to be rendered. How can
we do that?
