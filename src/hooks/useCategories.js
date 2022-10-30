import { useState, useEffect, useCallback } from "react";
import endingsIcon from "../assets/images/endings.png";
import equipmentIcon from "../assets/images/equipment.png";
import openingIcon from "../assets/images/opening.png";

const categories = [
  {
    id: "equipamiento",
    name: "Equipamiento",
    icon: equipmentIcon,
  },
  {
    name: "Aberturas",
    id: "aberturas",
    icon: openingIcon,
  },
  {
    name: "Terminaciones",
    id: "terminaciones",
    icon: endingsIcon,
  },
];

export const useCategories = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const onSelectCategory = useCallback(
    (categoryId) => {
      if (subCategory) setSubCategory(null);
      setCategory(categories?.find((c) => c.id === categoryId));
    },
    [categories, subCategory]
  );

  return {
    categories,
    category,
    subCategory,
    onSelectCategory,
  };
};
