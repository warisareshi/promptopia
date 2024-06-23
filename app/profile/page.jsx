"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session.user.id}/prompts`);
      const data = await response.json();

      setPrompts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);
  const handleEdit = async(prompt) => {
    router.push(`/update-prompt?promptId=${prompt._id}`);
  };

  const handleDelete = async(prompt) => {
    const hasConfirmed = confirm("Do you really want to delete this prompt?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        })

        const filteredPrompts = prompts.filter((prompts) => prompts._id !== prompts._id);

        setPrompts(filteredPrompts);

        router.push("/");

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      type={"personal"}
      image={session?.user.image}
    />
  );
};

export default ProfilePage;
