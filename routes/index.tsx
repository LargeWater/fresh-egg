import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Egg from "../islands/Egg.tsx";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fresh Egg</title>
      </Head>
      <Egg />
    </>
  );
}
