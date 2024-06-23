import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: params.username });
    if (!user) {
      return new Response(null, {
        status: 404,
        statusText: "User not found",
      });
    }
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
};
