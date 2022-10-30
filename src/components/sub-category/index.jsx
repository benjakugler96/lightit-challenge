import Image from "../image";
import arrowLeftIcon from "../../assets/images/arrow-left.png";

const SubCategory = ({ label, onBack, items = [], categoryName }) => {
  return (
    <>
      <button onClick={onBack} className="text-xs flex items-center gap-2 mb-1">
        <img src={arrowLeftIcon} height={10} width={10} />
        <span>{categoryName}</span>
      </button>
      <h1 className="text-xl font-bold mb-4">{label}</h1>
      <div className="grid laptop:grid-cols-2 grid-cols-3 gap-y-8">
        {items?.map((item) => (
          <div className="flex flex-col items-center cursor-pointer text-sm">
            <Image src={item.img} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubCategory;
