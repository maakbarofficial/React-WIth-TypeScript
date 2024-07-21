import { useState } from "react";

const Arrays = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleAdd = () => {
    setTags([...tags, "Excited"]);
  };

  const handleEdit = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happines" : tag)));
  };

  const handleDelete = () => {
    setTags(tags.filter((tag) => tag != "happy"));
  };
  return (
    <div>
      {tags.map((t) => (
        <p>{t}</p>
      ))}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Arrays;
