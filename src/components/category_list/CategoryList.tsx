import { get, groupBy, keys } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { getCategoryList } from "../../service";
import "./index.scss";

function CategoryList() {
  const { data } = useQuery("category_list", getCategoryList);
  const groupByCategoryList = groupBy(data?.sub, `category`);
  console.log(groupByCategoryList);
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
                        <div className="sub-cate-name">{subCategory.name}</div>
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
