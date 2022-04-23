import React from "react";
import "./index.scss";
import RcPagination from "rc-pagination";

type PropsType = {
  total: number;
  offset: number;
  pageLimit: number;
  pageChangeHandler: (num: number) => void;
};

function Pagination(props: PropsType) {
  const { offset, total, pageLimit, pageChangeHandler } = props;
  const initialPage = offset / pageLimit;
  return (
    <RcPagination
      defaultPageSize={pageLimit}
      defaultCurrent={0}
      current={initialPage + 1}
      pageSize={pageLimit}
      onChange={pageChangeHandler}
      total={total}
    />
  );
}

export default Pagination;
