import { generateUniqueCode } from "@/utils/generator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async (req, { params }) => {
  try {
    const { listTitle } = await req.json();

    if (!listTitle) {
      return new Response(
        JSON.stringify({
          message: "The list title is required!",
        }),
        { status: 400 }
      );
    }
    const uniqueCode = generateUniqueCode();
    const todoList = await prisma.todoList.create({
      data: {
        code: uniqueCode,
        title: listTitle,
      },
    });
    console.log("List:", todoList);
    return new Response(JSON.stringify({ todoList }), { status: 200 });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error. Kindly check the logs.",
      }),
      { status: 500 }
    );
  }
};
