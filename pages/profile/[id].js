import { useRouter } from "next/router";

const DynamicRouter = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>User ID : {id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const res = await fetch(url);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });

  return {
    paths,
    fallback: false, // if fallback is true. it means page return to 404 page not found.
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const id = params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  console.log(user);

  return {
    props: {
      user,
    },
  };
}

export default DynamicRouter;
