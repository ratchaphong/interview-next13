// import { server } from "../api/config";

export async function Users(req, res) {
  const token = req.cookies.auth;
  // console.log(req, token, server);
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    headers: {
      authorization: token,
    },
  });
  const data = await resp.json();
  // console.log(data);
  return data.length > 0 ? data : null;
}

export async function User(req, res) {
  const token = req.cookies.auth;
  // console.log(token, server);
  //   const resp = await fetch(`${server}/api/auth`, {
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${req.id}`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  const data = await resp.json();
  // console.log(data);
  return data.id ? data : null;
}
