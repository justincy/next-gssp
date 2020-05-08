import Layout from '../components/Layout';

export default function Redirect() {
  return (
    <Layout>
      <h1>You shouldn't ever see this</h1>
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: '/' });
  res.end();
  // You get console errors about "TypeError: Cannot convert undefined or null to object"
  // if you don't return an empty props object here.
  return { props: {} };
}
