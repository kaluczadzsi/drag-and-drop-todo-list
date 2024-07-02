export const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 h-full p-4 text-[#45474B]">
      <div className="max-w-[1200px] m-auto">
        <header>
          <h1 className="p-2 text-center rounded-md font-semibold text-2xl md:text-4xl mb-8">
            Drag & Drop Todo List
          </h1>
        </header>

        <main>
          <div className="input-group flex gap-4 mb-12">
            <input
              className="p-2 outline-none w-[80%] text-xl md:text-2xl placeholder:text-neutral-300 rounded-md"
              placeholder="Buy milk"
              id="todo-input"
              type="text"
            />
            <button className="p-2 w-[20%] rounded-md flex items-center justify-around bg-green-400 hover:bg-pos-100 hover:opacity-90">
              <p className="text-xl md:text-2xl">Create</p>
            </button>
          </div>

          <div className="todos-container sm:flex sm:text-center gap-4">
            <div className="todos mb-8 sm:w-full">
              <h3 className="text-xl md:text-2xl mb-4 uppercase bg-purple-500 p-2 rounded-md text-white">
                todo
              </h3>
              <div className="min-h-[300px] bg-white rounded-md"></div>
            </div>
            <div className="in-progress sm:w-full">
              <h3 className="text-xl md:text-2xl mb-4 uppercase bg-blue-500 p-2 rounded-md text-white">
                in progress
              </h3>
              <div className="min-h-[300px] bg-white rounded-md"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
