"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PromptCard from "@components/PromptCard";

const TagPage = ({ params }) => {
  const [prompts, setPrompts] = useState([]);
  const router = useRouter();

  const { data: session } = useSession();

  const handleTagClick = (tag) => {
    router.push(`/tag/${tag}`);
  };

  useEffect(() => {
    const fetchPromptsByTag = async () => {
      const response = await fetch(`/api/tag/${params.tag}`);

      if (!response.ok) {
        router.push("/errors/tag-not-found");
        return;
      }

      const allPrompts = await response.json();
      setPrompts(allPrompts);
    };

    if (params.tag) {
      fetchPromptsByTag();
    }
  }, [params.tag]);

  return (
    <>
      <h1m className="text-center text-2xl font-medium">
        These are the prompts found for{" "}
        <span className="font-bold blue_gradient">
          #{params.tag}
        </span>
      </h1m>
      <div className="mt-16 prompt_layout">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            image={prompt.creator.image}
            name={prompt.creator.username}
            desc={prompt.prompt}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </>
  );
};

export default TagPage;
