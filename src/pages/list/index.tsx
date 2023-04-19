import { useEffect } from "react";

export default function List({ users }: any) {
  console.log(users, 10);
  return <div>User list</div>;
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();

    console.log(result);

    return {
      props: {
        users: result,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
