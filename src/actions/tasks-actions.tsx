"use server"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

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