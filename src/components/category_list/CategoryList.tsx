import { get, groupBy, keys } from "lodash";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../constants";
import { ITopPlayListSearchParams } from "../../constants/type";
import { getCategoryList } from "../../service";
import { getParamsString } from "../../utils";
import "./index.scss";
type CategoryListPropsType = {
  hideCatList: () => void;
};

function CategoryList({ hideCatList }: CategoryListPropsType) {
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const { data } = useQuery("category_list", getCategoryList);
  const groupByCategoryList = groupBy(data?.sub, `category`);

  const gotoPlayList = (cat: string) => {
    const params: ITopPlayListSearchParams = {
      offset: 0,
      limit: PAGE_LIMIT,
      cat,
    };
    navigator(`/playlist?${getParamsString(params)}`);
    hideCatList();
  };

  const closeCategoryList = (e: any) => {
    hideCatList();
  };

  useEffect(() => {
    document.addEventListener("click", closeCategoryList);
    return () => {
      document.removeEventListener("click", closeCategoryList);
    };
  }, []);

  return (
    <div className="category-list-container">
      <div className="arrow"></div>
      <div className="category-list-header">
        <div className="all-btn">全部风格</div>
      </div>
      <div className="category-list-content">
        <div className="category-list">
          {keys(groupByCategoryList).map((key, index) => {
            return (
              <div className="category-item" key={index}>
                <div className="name-icon">
                  <div className={`cate-icon cate-icon_${index}`}></div>
                  <div className="cate-name">{get(data?.categories, key)}</div>
                </div>
                <div className="sub-category-list">
                  {get(groupByCategoryList, key).map((subCategory, _index) => {
                    return (
                      <div
                        className="sub-category-item"
                        key={`${subCategory.name} + _index`}
                      >
                        <div
                          className={`sub-cate-name ${
                            cat === subCategory.name ? "active" : ""
                          }`}
                          onClick={() => {
                            gotoPlayList(subCategory.name);
                          }}
                        >
                          {subCategory.name}
                        </div>
                        <div className="sub-category-item-split">|</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
