import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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
