import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  try {
    const { listId } = params;
    if (!listId)
      return new Response(
        JSON.stringify({
          message: "No List Requested!",
        }),
        { status: 400 }
      );
    console.log("Getting list for:", listId);
    const todoList = await prisma.todoList.findUnique({
      where: { code: listId },
      include: { todoItems: true },
    });
    await prisma.$disconnect();
    // console.log(todoList);

    if (!todoList)
      return new Response(JSON.stringify({ message: "No List Found" }), {
        status: 404,
      });
    return new Response(JSON.stringify({ todoList }), { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error. Kindly check the logs.",
      }),
      { status: 500 }
    );
  }
};

export const POST = async (req, { params }) => {
  try {
    const { listId } = params;
    const { text } = await req.json();

    if (!listId)
      return new Response(
        JSON.stringify({
          message: "No List Requested!",
        }),
        { status: 400 }
      );

    let todoList = await prisma.todoList.findUnique({
      where: { code: listId },
    });
    const todoItem = await prisma.todoItem.create({
      data: {
        text,
        todoListId: todoList.id,
      },
    });
    todoList = await prisma.todoList.findUnique({
      where: { code: listId },
      include: { todoItems: true },
    });
    console.log(todoItem);

    await prisma.$disconnect();
    return new Response(JSON.stringify({ todoList }, { status: 200 }));
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

// Update a todo item's checked status
export const PATCH = async (req, { params }) => {
  const { todoItem } = await req.json();
  try {
    if (!todoItem) {
      return new Response(
        JSON.stringify({
          message: "No List Requested!",
        }),
        { status: 400 }
      );
    }

    const updatedTodoItem = await prisma.todoItem.update({
      where: { id: todoItem.id },
      data: { isChecked: !todoItem.isChecked },
    });
    await prisma.$disconnect();

    if (!updatedTodoItem)
      return new Response(JSON.stringify({ message: "No Todo Item Found" }), {
        status: 404,
      });
    return new Response(JSON.stringify({ updatedTodoItem }), { status: 200 });
  } catch (error) {
    console.error("PATCH Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error. Kindly check the logs.",
      }),
      { status: 500 }
    );
  }
};
