import Head from "next/head";
import {GetStaticProps} from "next";
import {FC} from "react";

import styles from "../styles/Home.module.scss"
import Heading from "@/components/Heading";
import {Socials} from "@/components/Socials";
import {socialsType} from "@/types";

type homeProps={
  socials:[socialsType]
}

export const getStaticProps: GetStaticProps = async () => {
  try{
  const response = await fetch(`${process.env.API_HOST}/socials/`)
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {socials: data},
  }

  }catch {
    return {
      props: {socials: null},
    }
  }
}


const Home: FC<homeProps> = ({socials}) => {
  return (

    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={"Next.js Application"}/>
      <Socials socials={socials}/>
    </div>

  )
}

export default Home;
