import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ tag: params.tag }).populate('creator');
    if (!prompts) {
      return new Response(null, {
        status: 404,
        statusText: "Prompt not found",
      });
    }
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
};
