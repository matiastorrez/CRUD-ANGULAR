export interface Task {
  id: number,
  title: string,
  description: string
}

export interface CreateTaskDTO extends Omit<Task, 'id'> {}

export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {}
