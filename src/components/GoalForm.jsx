import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createGoal({ text })).unwrap(); // Unwrap the promise to handle success and error
      toast.success("Goal created successfully.");
      setText(""); // Clear the form input
    } catch (error) {
      toast.error("Failed to create goal. Please try again.");
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
