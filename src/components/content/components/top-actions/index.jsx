const TopActions = ({ categories, onSelectCategory }) => (
  <div className="flex justify-end w-full mobile:justify-between">
    <div className="mobile:flex hidden gap-2">
      {categories.map((category) => (
        <button
          className="bg-white rounded-md px-2 py-2"
          onClick={() => onSelectCategory(category.id)}
        >
          <img src={category.icon} height={25} width={25} />
        </button>
      ))}
    </div>
    <div className="mobile:text-sm flex gap-2">
      <button className="bg-white rounded-md px-4 py-2 w-20">Fijar</button>
      <button className="bg-white rounded-md px-4 py-2 w-20">Borrar</button>
    </div>
  </div>
);

export default TopActions;
