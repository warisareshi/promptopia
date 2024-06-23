import React from "react";
import Link from "next/link";

const Form = ({ type, prompt, setPrompt, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col pb-5">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text max-w-md">
        {type} and share amazing prompts with your friends and the world and
        explore the vast universe of AI.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Prompt
          </span>
        </label>

        <textarea
          value={prompt.prompt}
          onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })}
          placeholder="Write your prompt here"
          required
          className="form_textarea"
        ></textarea>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {" "}
            <span className="font-normal">#product, #webdev, #idea</span>
          </span>
        </label>

        <input
          value={prompt.tag}
          onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
          placeholder="#tag"
          required
          className="form_input"
        ></input>
        
        <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">Cancel</Link>
            <button
              type="submit"
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              disabled={submitting}
            >
              {submitting ? `${type}ing...` : `${type}`}
            </button>
        </div>

      </form>
    </section>
  );
};

export default Form;
