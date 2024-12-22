import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

// How to get params from the URL in a page component
// Code example here
//Edit({ params }: { params: { id: string } })
export default async function Edit({ params }: { params: { id: string } }) {
    const id = parseInt(await params.id);
    
    const taskFound = await prisma.task.findFirst({
        where: {
            id: id,
        },
    });    
    
    if (!taskFound) {
        return redirect("/");
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <TaskForm Task={taskFound} />
    </div>
  )
}
