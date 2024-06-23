"use client";

import { useRouter } from "next/navigation";
import PromptCard from "@components/PromptCard";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ type, data, handleEdit, handleDelete, image, email, name }) => {

  const router = useRouter();

    const handleTagClick = (tag) => {
    router.push(`/tag/${tag}`);
  };

  return (
    <section className="w-full">
      <div className="flex flex-row gap-10 w-full h-full">
        <Image
          src={image}
          alt="avatar"
          height={60}
          width={60}
          className="rounded-full w-[151px]"
        />
        <div>
          {type === "personal" ? (
            <div>
              <h1 className="head_text text-left blue_gradient">
                Your Profile
              </h1>
              <p className="desc text-left">Check out all your prompts</p>
            </div>
          ) : (
            <div>
              <h1 className="head_text text-left blue_gradient">
                {name}
              </h1>
              <p className="desc text-left">Checkout all of prompts by {name}</p>
              <p>
                Contact at{" "}
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  {email}
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}
            handleTagClick={() => handleTagClick && handleTagClick(prompt.tag)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
