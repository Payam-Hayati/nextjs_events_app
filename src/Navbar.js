import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
