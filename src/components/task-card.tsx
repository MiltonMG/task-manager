import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { task } from "@prisma/client";
import clsx from "clsx";

export const TaskCard = ({ task }: {task:task}) => {
  return (
    <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>{task.name}</CardTitle>
            <Badge className={
              clsx({
                "bg-red-500": task.priority === "urgent",
                "bg-orange-500": task.priority === "High",
                "bg-yellow-500": task.priority === "Medium",
                "bg-green-500": task.priority === "Low",
              })
            } >{task.priority}</Badge>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-600">{ new Date(task.createAt).toLocaleDateString() }</span>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button variant="outline">Update</Button>
            <Button variant="outline">Delete</Button>
          </CardFooter>
        </Card>
    )
}
