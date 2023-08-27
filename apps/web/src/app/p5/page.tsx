"use client";

import { Userlist } from "../components/user-list";
import { useUsers } from "../hooks";

export default function Page5() {
  const [users, { loading }] = useUsers(5);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <h2>Page 5</h2>
      <Userlist users={users} />
    </section>
  );
}
