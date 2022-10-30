import { XMarkIcon } from "@heroicons/react/20/solid";
import SubCategory from "../sub-category";
import { useCategory } from "../../hooks/useCategory";
import arrowLeft from "../../assets/images/arrow-left.png";

const Category = ({ categoryId, withCloseIcon = false, onCloseIconClick }) => {
  const { category, subCategory, onSelectSubCategory } =
    useCategory(categoryId);

  return (
    <div className="p-5">
      {subCategory ? (
        <SubCategory
          label={subCategory.name}
          onBack={() => onSelectSubCategory(null)}
          items={subCategory.items}
          categoryName={category.name}
        />
      ) : (
        <>
          <div className="mobile:flex mobile:justify-between">
            <h1 className="text-xl font-bold">{category?.name}</h1>
            {withCloseIcon && (
              <XMarkIcon height={25} width={25} onClick={onCloseIconClick} />
            )}
          </div>
          <div>
            {category?.items?.map((item) => (
              <div
                className="bg-gray-50 rounded-md my-4 p-2 w-full flex justify-between items-center cursor-pointer"
                onClick={() => onSelectSubCategory(item.id)}
              >
                <span>{item.name}</span>
                <img src={arrowLeft} className="rotate-180 w-5 h-5" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
