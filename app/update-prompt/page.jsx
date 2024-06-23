import { Suspense } from "react";
import UpdatePrompt from "./UpdatePrompt";

const UpdatePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePage;
