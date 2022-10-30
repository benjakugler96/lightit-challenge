import Item from "../item";

const ItemList = ({ items, onClick, selectedItem }) => (
  <div className="flex flex-col justify-center items-center h-full mobile:w-16 w-24 gap-2">
    {items.map((item) => (
      <Item
        icon={item.icon}
        label={item.name}
        key={item.id}
        onClick={() => onClick(item.id)}
        isSelected={selectedItem === item.id}
      />
    ))}
  </div>
);

export default ItemList;
