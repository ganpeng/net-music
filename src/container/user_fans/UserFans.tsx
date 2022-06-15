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
import { getFollowedsById } from "../../service";
import { getParamsString } from "../../utils";

function UserFans() {
  const data = useOutletContext<ContextType>();
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const id = Number(searchParams.get("id"));
  const offset = Number(searchParams.get("offset")) || 0;
  const { data: followedsData, isFetching } = useQuery(
    ["get_followeds", id, offset],
    () => {
      const params = {
        uid: id,
        offset,
        limit: FOLLOW_LIST_LIMIT,
      };
      return getFollowedsById(params);
    }
  );

  const pageChangeHandler = (pageNo: number) => {
    const params = {
      id,
      offset: pageNo - 1,
      limit: FOLLOW_LIST_LIMIT,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/user/fans?${getParamsString(params)}`);
    }
  };

  console.log(followedsData);
  return (
    <div className="user-fans-conatiner">
      <SectionHeader
        title={`粉丝（${data.followeds}）`}
        hasTitleIcon={false}
        moreLink=""
      ></SectionHeader>
      <Follow follows={followedsData?.followeds || []} isFans={true}></Follow>
      {data.followeds > FOLLOW_LIST_LIMIT && (
        <Pagination
          total={data.followeds || 0}
          pageLimit={FOLLOW_LIST_LIMIT}
          offset={offset * FOLLOW_LIST_LIMIT}
          pageChangeHandler={pageChangeHandler}
        ></Pagination>
      )}
    </div>
  );
}

export default UserFans;
