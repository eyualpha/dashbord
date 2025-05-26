"use client";

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const List = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: " 6",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "7",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "8",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
];

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full mb-4">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setOpen(false);
              setDate(date);
            }}
            className="rounded-md border shadow"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] overflow-y-auto">
        <div className="flex flex-col gap-4">
          {List.map((item) => {
            return (
              <Card className="p-4" key={item.id}>
                <div className="flex items-center gap-4 ">
                  <Checkbox id={item.id} />
                  <label
                    htmlFor={item.id}
                    className="text-muted-foreground text-sm"
                  >
                    {item.title}
                  </label>
                </div>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
