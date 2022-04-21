import React from "react";
import { PAGE_LIMIT } from "../../constants";
import "./index.scss";
import RcPagination from "rc-pagination";
// import "./rc_pagination.scss";

type PropsType = {
  total: number;
  offset: number;
  pageChangeHandler: (num: number) => void;
};

function Pagination(props: PropsType) {
  const { offset, total, pageChangeHandler } = props;
  const initialPage = offset / PAGE_LIMIT;
  return (
    <RcPagination
      defaultPageSize={PAGE_LIMIT}
      defaultCurrent={0}
      current={initialPage + 1}
      pageSize={PAGE_LIMIT}
      onChange={pageChangeHandler}
      total={total}
    />
  );
}

export default Pagination;
