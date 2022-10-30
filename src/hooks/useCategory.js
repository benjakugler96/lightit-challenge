import { useEffect, useState, useCallback } from "react";
import { fetchApi } from "../utils/fetch";

export const useCategory = (categoryId) => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      const data = await fetchApi(`/${categoryId}`);
      setCategory(data);
    };
    if (categoryId && categoryId !== category?.id) {
      // Reset sub category state if we click in a main category
      if (subCategory) setSubCategory(null);
      getCategory();
    }
  }, [categoryId]);

  const onSelectSubCategory = useCallback(
    (subCategoryId) => {
      setSubCategory(category?.items?.find((s) => s.id === subCategoryId));
    },
    [category]
  );

  return { category, onSelectSubCategory, subCategory };
};
