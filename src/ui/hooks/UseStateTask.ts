import { useEffect, useState } from "react";
import getDataService from "service/DataStoragePolicyService";
import TaskStorage, { MAIN_STORAGE_KEY } from "service/TaskStorage";
import { Task } from "ui/organism/TasksList";

const INITIAL_DATA: TaskStorage[] = [
  {
    id: "todo-0",
    name: "Eat",
    completed: true,
  },
];
// TODO we shouldn't know how the data is converted from Task to TaskStorage, which in the case is in a string format
function useStateTask(): [Task[], (value: Task[]) => void] {
  const storage = getDataService();

  const [value, setValue] = useState(
    storage.getItem(MAIN_STORAGE_KEY) || _setInitialTaks(storage)
  );

  useEffect(() => {
    storage.setItem(MAIN_STORAGE_KEY, value);
  }, [value, storage]);

  return [
    JSON.parse(value),
    (newValue: Task[]) => setValue(JSON.stringify(newValue)),
  ];
}

// TODO should be in a service class
// TODO storage should have an interface which shoul be abstracted from the storage type
function _setInitialTaks(storage: Storage): string {
  const data = JSON.stringify(INITIAL_DATA);
  storage.setItem(MAIN_STORAGE_KEY, JSON.stringify(INITIAL_DATA));
  return data;
}

export default useStateTask;
