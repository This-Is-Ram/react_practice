import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export const ListItem = ({
  onHandleTaskLi,
  onHandleTaskUpdate,
  onHandleDelete,
}) => {
  const { id, content, checked } = onHandleTaskLi;

  const handleCheck = () => {
    // Toggle checked status and pass the updated task to the parent
    onHandleTaskUpdate({ ...onHandleTaskLi, checked: !checked });
  };

  const handleDel = () => {
    // Call the delete function passed from the parent
    onHandleDelete(id);
  };

  return (
    <li className="w-full bg-white my-4 p-4 rounded-3xl flex justify-between items-center">
      <span className={checked ? "line-through" : ""}>{content}</span>
      <span className="flex">
        <FaCheck
          onClick={handleCheck}
          className={`${
            checked ? "line-through" : ""
          } w-8 h-8 p-[3px] bg-green-500 text-white mx-2 rounded-full flex items-center justify-center cursor-pointer`}
        />
        <MdDelete
          onClick={handleDel}
          className="w-8 h-8 p-[3px] bg-red-500 text-white mx-2 rounded-full flex items-center justify-center cursor-pointer"
        />
      </span>
    </li>
  );
};
