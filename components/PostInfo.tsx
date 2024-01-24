import {FC} from "react";
import {postType} from "@/types";

import Heading from "./Heading";

type postInfoProps = {
  post: postType
}

const PostInfo: FC<postInfoProps> = ({post}) => {
  const {title, body} = post || {};

  if (!post) {
    return <Heading tag={"h3"} text={"Empty post"}/>
  }

  return (
    <>
      <Heading tag={"h3"} text={title}/>
      <div>
        {body}
      </div>
    </>
  )

};


export {PostInfo};
