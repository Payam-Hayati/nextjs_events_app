import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../src/Navbar";
// import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Welcome To Events Site</title>
        <meta name="description" content="Designed by Payam Hayati" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Start Navbar */}
      <Navbar />

      {/* Start Container */}
      <div className="container mx-auto">
        {data.map((ev) => (
          <div className="my-box" key={ev.id}>
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image width={200} height="200" alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {/* End Container */}
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
