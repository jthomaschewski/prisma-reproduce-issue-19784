"use client";

import { Userlist } from "../components/user-list";
import { useUsers } from "../hooks";

export default function Page3() {
  const [users, { loading }] = useUsers(3);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <h2>Page 3</h2>
      <Userlist users={users} />
    </section>
  );
}
