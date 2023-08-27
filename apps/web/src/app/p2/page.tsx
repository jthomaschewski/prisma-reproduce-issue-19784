"use client";

import { Userlist } from "../components/user-list";
import { useUsers } from "../hooks";

export default function Page2() {
  const [users, { loading }] = useUsers(2);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <h2>Page 2</h2>
      <Userlist users={users} />
    </section>
  );
}
