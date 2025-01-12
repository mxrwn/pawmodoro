import Task from "./task.scheme";

export default interface Pomodoro {
  id: number;
  time: number;
  pause: number;
  long_number: number;
  tasks: Task[];
}
