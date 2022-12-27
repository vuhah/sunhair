export default function Category({ name, codepath, handleEvent }) {
  return (
    <div>
      <input
        id="category"
        type="radio"
        name="category"
        value={name}
        className="radio-category"
        onClick={(e) => handleEvent(e, name, codepath)}
      />
      <lable htmlFor="category">{name}</lable>
    </div>
  );
}
