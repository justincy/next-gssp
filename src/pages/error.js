import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout>
      <h1>
        You should not ever see this because the error status returned by{' '}
        <code>getServerSideProps</code>
        will prevent this page from rendering.
      </h1>
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  res.writeHead(500);
  res.end();
  // You get console errors about "TypeError: Cannot convert undefined or null to object"
  // if you don't return an empty props object here.
  return { props: {} };
}
