export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  task?: Task[];
}

export interface Task {
  description?: string;
  label?:
    | 'purple'
    | 'blue'
    | 'cyan'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'gray';
}
