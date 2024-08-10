import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteGoal(goal._id)).unwrap(); // Assuming deleteGoal returns a thunk action
      toast.success("Goal deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete the goal. Please try again.");
    }
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={handleDelete} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
