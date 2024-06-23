"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = ({ params }) => {
  const [prompts, setPrompts] = useState([]);
  const router = useRouter();
  const [user, setUser] = useState({});
  const username = params.username;

  useEffect(() => {
    const fetchUserbyUsername = async () => {
      const response = await fetch(`/api/user/${username}`);

      if (!response.ok) {
        router.push("/errors/user-not-found");
        return;
      }

      const userData = await response.json();
      setUser(userData);
    };

    if (username) {
      fetchUserbyUsername();
    }
  }, [username]);

  useEffect(() => {
    const fetchUserPrompts = async () => {
      if (user._id) {
        const response = await fetch(`/api/users/${user._id}/prompts`);
        const data = await response.json();

        setPrompts(data);
      }
    };
    fetchUserPrompts();
  }, [user]);

  return (
    <>
      <Profile
        name={`${user?.username || ""}'s`}
        image={user?.image || ""}
        desc={`Check out ${user?.username || ""}'s prompts`}
        data={prompts || []}
        handleEdit={() => {}}
        handleDelete={() => {}}
        email={user?.email || ""}
        type={"other"}
      />
    </>
  );
};

export default ProfilePage;