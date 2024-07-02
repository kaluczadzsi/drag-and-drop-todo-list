export const App = () => {
  return (
    <div className="bg-[#F5F7F8] h-full p-4 text-[#45474B]">
      <div className="max-w-[1200px] m-auto">
        <header>
          <h1 className="p-2 text-center rounded-md text-white font-semibold text-2xl md:text-4xl mb-8 bg-gradient-to-r from-[#219C90] to-black">
            Drag & Drop Todo List
          </h1>
        </header>

        <main>
          <div className="input-group flex gap-4">
            <input
              className="p-2 outline-none w-[80%] text-xl md:text-2xl placeholder:text-neutral-300 rounded-md"
              placeholder="Buy milk"
              id="todo-input"
              type="text"
            />
            <button className="p-2 w-[20%] rounded-md flex items-center justify-around bg-gradient-to-r from-green-400 to-green-600 hover:bg-pos-100 hover:opacity-90">
              <p className="text-xl md:text-2xl">Create</p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
