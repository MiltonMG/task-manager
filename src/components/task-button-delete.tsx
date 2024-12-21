import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const TaskButtonDelete = ( {taskId}: {taskId: number} ) => {
  
  async function removeTask(formData : FormData) {
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

  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button type="submit" variant="outline" size="sm">Delete</Button>
    </form>

  )
}
