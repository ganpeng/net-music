import React from "react";
import { useQuery } from "react-query";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import { Follow, Pagination, SectionHeader } from "../../components";
import { FOLLOW_LIST_LIMIT } from "../../constants";
import { ContextType } from "../../page/user/User";
import { getFollowsById } from "../../service";
import { getParamsString } from "../../utils";

function UserFollows() {
  const data = useOutletContext<ContextType>();
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const id = Number(searchParams.get("id"));
  const offset = Number(searchParams.get("offset")) || 0;
  const { data: followsData, isFetching } = useQuery(
    ["get_follows", id, offset],
    () => {
      const params = {
        uid: id,
        offset,
        limit: FOLLOW_LIST_LIMIT,
      };
      return getFollowsById(params);
    }
  );

  console.log(followsData);

  const pageChangeHandler = (pageNo: number) => {
    const params = {
      id,
      offset: pageNo - 1,
      limit: FOLLOW_LIST_LIMIT,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/user/follows?${getParamsString(params)}`);
    }
  };

  return (
    <div>
      <SectionHeader
        title={`关注（${data.follows}）`}
        hasTitleIcon={false}
        moreLink=""
      ></SectionHeader>
      <Follow follows={followsData?.follow || []}></Follow>
      {data.follows > FOLLOW_LIST_LIMIT && (
        <Pagination
          total={data.follows || 0}
          pageLimit={FOLLOW_LIST_LIMIT}
          offset={offset * FOLLOW_LIST_LIMIT}
          pageChangeHandler={pageChangeHandler}
        ></Pagination>
      )}
    </div>
  );
}

export default UserFollows;
