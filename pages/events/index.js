import Navbar from "../../src/Navbar";
import Link from "next/link";
import Image from "next/image";
const EventsPage = ({ data }) => {
  return (
    <>
      {/* Start Navbar */}
      <Navbar />
      {/* Start Container */}
      <div className="container mx-auto flex gap-4">
        {data.map((ev) => (
          <div className="my-box" key={ev.id}>
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image width={200} height="200" alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      {/* End Container */}
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
