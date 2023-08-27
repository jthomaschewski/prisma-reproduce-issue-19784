"use client";

import { Userlist } from "../components/user-list";
import { useUsers } from "../hooks";

export default function Page4() {
  const [users, { loading }] = useUsers(4);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <h2>Page 4</h2>
      <Userlist users={users} />
    </section>
  );
}
