"use client";
import { useEffect, useState } from "react";

export const useUsers = (n: number) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    fetch(`/api/users${n}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return [users, { loading }] as const;
};
