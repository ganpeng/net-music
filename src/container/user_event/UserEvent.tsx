import React from "react";
import { useOutletContext } from "react-router-dom";
import { SectionHeader } from "../../components";
import { ContextType } from "../../page/user/User";

function UserEvent() {
  const data = useOutletContext<ContextType>();
  console.log(data);
  return (
    <div>
      <SectionHeader
        title={`TA的动态（${data.eventCount}）`}
        hasTitleIcon={false}
        moreLink=""
      ></SectionHeader>
    </div>
  );
}

export default UserEvent;
