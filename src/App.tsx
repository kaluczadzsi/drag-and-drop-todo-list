import { ChangeEvent, useState } from 'react';

interface Todo {
  id: string;
  value: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const todo: Todo = {
      id: Math.random().toString(),
      value: inputValue,
    };

    if (inputValue.trim()) {
      setTodos([...todos, todo]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 h-full p-4 text-[#45474B]">
      <div className="max-w-[1200px] m-auto">
        <header>
          <h1 className="p-2 text-center rounded-md font-semibold text-3xl md:text-5xl mb-8">
            Drag & Drop Todo List
          </h1>
        </header>

        <main>
          <section className="input-group flex gap-4 mb-12">
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

          <section className="todos-container sm:flex sm:text-center gap-4">
            <div className="todos mb-8 sm:w-full">
              <h3 className="text-xl md:text-2xl mb-4 uppercase bg-purple-500 p-2 rounded-md text-white">
                todo
              </h3>
              <div className="min-h-[104px] md:min-h-[112px] bg-white rounded-md p-2 flex flex-col gap-2">
                {todos.map((todo) => (
                  <div
                    draggable
                    key={todo.id}
                    className="bg-neutral-100 p-2 rounded-md"
                  >
                    <p className="md:text-xl">{todo.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="in-progress sm:w-full">
              <h3 className="text-xl md:text-2xl mb-4 uppercase bg-blue-500 p-2 rounded-md text-white">
                in progress
              </h3>
              <div className="min-h-[104px] md:min-h-[112px] bg-white rounded-md p-2 flex flex-col gap-2"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
