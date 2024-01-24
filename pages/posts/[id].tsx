import Head from "next/head";
import {FC} from "react";
import {GetStaticPaths, GetStaticProps} from "next";

import {PostInfo} from "../../components/PostInfo";
import {postType} from "../../types";

///Static Site Generation (SSG)

type postProps = {
  post: postType
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json();

  const paths = data.map(({id}) => ({
    params: {id: id.toString()}
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {post: data},
  }
}

const Posts: FC<postProps> = ({post}) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post}/>

    </>
  )
}

export default Posts;
