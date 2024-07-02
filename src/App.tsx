import { ChangeEvent, useState } from 'react';
import ShortUniqueId from 'short-unique-id';

interface Todo {
  id: string;
  value: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const uid = new ShortUniqueId();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const todo: Todo = {
      id: uid.rnd(),
      value: inputValue,
    };

    if (inputValue.trim()) {
      setTodos([...todos, todo]);
      setInputValue('');
    }
    console.log(todos);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  let dragged: HTMLElement | null = null;

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    dragged = e.currentTarget;
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      dragged &&
      e.target instanceof HTMLElement &&
      e.target.dataset.droppable === 'true' &&
      !e.target.contains(dragged)
    ) {
      dragged.parentNode?.removeChild(dragged);
      e.target.appendChild(dragged);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 h-full p-4 text-[#45474B]">
      <div className="max-w-[1200px] m-auto">
        <header>
          <h1 className="p-2 mb-8 text-3xl font-semibold text-center rounded-md md:text-5xl">
            Drag & Drop Todo List
          </h1>
        </header>

        <main>
          <section className="flex gap-4 mb-12 input-group">
            <input
              className="p-2 outline-none w-[80%] text-xl md:text-2xl placeholder:text-neutral-300 rounded-md"
              placeholder="Buy milk"
              id="todo-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button
              className="p-2 w-[20%] rounded-md flex items-center justify-around bg-green-400 hover:bg-pos-100 hover:opacity-90"
              onClick={handleAddTodo}
            >
              <p className="text-xl md:text-2xl">Create</p>
            </button>
          </section>

          <section className="gap-4 todos-container sm:flex sm:text-center">
            <div className="mb-8 todos sm:w-full">
              <h3 className="p-2 mb-4 text-xl text-white uppercase bg-purple-500 rounded-md md:text-2xl">
                todo
              </h3>
              <div
                data-droppable="true"
                className="min-h-[104px] md:min-h-[112px] bg-white rounded-md p-2 flex flex-col gap-2"
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={onDrop}
              >
                {todos.map((todo) => (
                  <div
                    draggable
                    key={todo.id}
                    className={`p-2 rounded-md bg-neutral-100 animate-pulse hover:bg-neutral-200`}
                    onDragStart={onDragStart}
                  >
                    <p className="md:text-xl">{todo.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="in-progress sm:w-full">
              <h3 className="p-2 mb-4 text-xl text-white uppercase bg-blue-500 rounded-md md:text-2xl">
                in progress
              </h3>
              <div
                data-droppable="true"
                className="min-h-[104px] md:min-h-[112px] bg-white rounded-md p-2 flex flex-col gap-2"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
              ></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
