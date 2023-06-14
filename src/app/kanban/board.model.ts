export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  tasks?: Task[];
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
