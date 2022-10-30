import { useState, useEffect, useCallback } from "react";
import endingsData from "../mocks/endings.json";
import endingsIcon from "../assets/images/endings.png";
import equipmentData from "../mocks/equipment.json";
import equipmentIcon from "../assets/images/equipment.png";
import openingIcon from "../assets/images/opening.png";
import openingsData from "../mocks/openings.json";

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
