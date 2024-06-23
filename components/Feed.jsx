"use client"

import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import PromptCard from "@components/PromptCard";

const PromptCards = ({data, handleTagClick}) => {
  return <div className="mt-16 prompt_layout">
    {data.map((prompt) => (<PromptCard key={prompt._id} prompt={prompt} handleTagClick={handleTagClick} />))}
  </div>
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const router = useRouter();

  const handleTagClick = (tag) => {
    router.push(`/tag/${tag}`);
  } 

  const search = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/tag/${searchText}`);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json()
      
      setPrompts(data)
    })()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full text-center flex flex-row gap-2" onSubmit={search}>
        <input
          type="text"
          placeholder="Enter a tag (without #)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input peer"
        />

        <button className="black_btn" type="submit">Search</button>
      </form>

      <PromptCards 
      data={prompts}
      handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
