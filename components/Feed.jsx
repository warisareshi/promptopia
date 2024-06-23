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

  const handleSearchChange = (e) => {}

  const handleTagClick = (tag) => {
    router.push(`/tag/${tag}`);
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
      <form className="relative w-full text-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCards 
      data={prompts}
      handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
