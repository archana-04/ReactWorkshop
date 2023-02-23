import { useState } from "react";

const data = [];

function Forms() {
  const [state, setState] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    const task = event.target.elements.task;
    const taskTrim = task.value.trim();
    setState((prev) => [...prev, taskTrim]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex-col">
          <input
            className="border-4 border-black p-2"
            type="text"
            name="name"
            placeholder="username"
            autoComplete="off"
          />
          <button
            className="bg-grey-600 hover:bg-green-900 py-2 px-4 rounded-md text-white ml-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <div>
          {state.map((name) => {
            return (
              <h1 className="mt-3 text-2xl ml-2 bg-gray-400 text-white font-bold cursor-pointer hover:bg-gray-800  m-2 py-2 px-8 w-fit rounded-lg">
                {name}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Forms;
