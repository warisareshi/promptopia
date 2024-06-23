import Feed from "@components/Feed";
import { Suspense } from "react";
const Home = () => {
  return (
    <section>
      <h1 className="head_text text-center">
        Explore the universe of Aritificial Intelligence
        <br />
        <span className="orange_gradient">with Promptopia</span>
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed />
      </Suspense>
    </section>
  );
};

export default Home;
