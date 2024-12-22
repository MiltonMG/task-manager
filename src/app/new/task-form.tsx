import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createTask, updateTask } from "@/actions/tasks-actions"
import { task } from "@prisma/client"
import Link from "next/link"


export function TaskForm( {Task}: {Task:task} ) {

  const functionAction = Task?.id ? updateTask : createTask

  return (
    <form action={functionAction}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create A Task</CardTitle>
          <CardDescription>Fill out the form below to create a new task.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <input type="hidden" name="taskId" value={Task?.id} />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Task Name</Label>
              <Input name="name" id="name" placeholder="Name of your project" 
              defaultValue={Task?.name}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Task description." 
              defaultValue={Task?.description || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Priority</Label>
              <Select name="priority" defaultValue={Task?.priority}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className={ buttonVariants({ variant:"outline" }) }>Cancel</Link>
          <Button type="submit">
            {Task?.id ? "Update Task" : "Create Task"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
