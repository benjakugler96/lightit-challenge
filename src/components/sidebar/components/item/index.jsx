const Item = ({ icon, label, onClick, isSelected, id }) => (
  <div
    className={`flex flex-col mobile:w-16 w-24 justify-center items-center cursor-pointer ${
      isSelected ? "bg-gray-100" : ""
    }`}
    onClick={onClick}
    data-testid={id}
  >
    <img src={icon} height={30} width={30} />
    <span className="mobile:text-xs text-sm">{label}</span>
  </div>
);

export default Item;
