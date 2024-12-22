"use server"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
//import { task } from '@prisma/client';

export async function createTask(formData: FormData) {
    // Your implementation here
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    if (!name || !description || !priority) {
      throw new Error("Please fill out all fields.")
    }

    const newTask = await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority,
      },
    })

    console.log(newTask);
    

    redirect(`/`)

  }
  export async function removeTask(formData : FormData) {
    "use server"
    const taskId = formData.get("taskId")?.toString();

    if (!taskId) {
      return;
    }
    await prisma.task.delete({
      where: {
        id: Number(taskId),
      }
    });
    revalidatePath("/");
  }

  export async function updateTask(formData: FormData) {
    "use server"
    const taskId = formData.get("taskId")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const priority = formData.get("priority")?.toString();
    
    if (!taskId || !name || !description || !priority) {
      return;
    }

    await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        name: name,
        description: description,
        priority: priority,
      }
    });

    redirect(`/`);
  }