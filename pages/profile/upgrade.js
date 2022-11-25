import { Users } from "./User";
import Link from "next/link";

export default function Profile({ title, LoggedIn }) {
  return (
    <div>
      <h1>{title}</h1>
      {LoggedIn.map((d) => (
        <>
          <Link href={`/profile/${d.id}`}>
            <h3>{d.name}</h3>
          </Link>
          <Link href={`/profile/${d.id}/detail`}>
            <p>{d.phone}</p>
          </Link>
        </>
      ))}
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const data = await Users({ ...req, token: "hello world" }, res);
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      title: "This is title from getServerSideProps (Server Side)",
      LoggedIn: data,
    },
  };
};
