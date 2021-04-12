export const MAIN_STORAGE_KEY = "yatatasks";

interface TaskStorage {
  id: string;
  name: string;
  completed: boolean;
}

export default TaskStorage;
