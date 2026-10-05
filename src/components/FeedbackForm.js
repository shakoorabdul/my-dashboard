import { useState } from "react";
export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="card">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {submitted ? (
        <h3>Thank you, {name}!</h3>
      ) : (
        <p>Please enter your name.</p>
      )}
    </div>
  );
}
