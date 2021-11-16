import Head from "next/head";

import { useRouter } from "next/router";

export default function Dynamic() {
  const router = useRouter();
  const { dynamicNumber } = router.query;

  return (
    <div className="container">
      <Head>
        <title>about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      post {dynamicNumber}
    </div>
  );
}
