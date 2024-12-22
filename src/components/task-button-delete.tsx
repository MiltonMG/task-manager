import { removeTask } from "@/actions/tasks-actions";
import { Button } from "@/components/ui/button";

export const TaskButtonDelete = ({ taskId }: { taskId: number }) => {

  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button type="submit" variant="outline" size="sm">Delete</Button>
    </form>

  )
}
