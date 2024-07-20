//PascalCasing
function Message() {
  //JSX: JavaScript XML - Tools like babel convert it to make it understandable for browser

  const name = "Ali Akbar";

  if (name) return <h1>Hello {name}!</h1>;
  return <h1>Hello World!</h1>;
}

export default Message;
