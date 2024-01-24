import Head from "next/head";
import {useRouter} from "next/router";
import {FC, useEffect} from "react";

import Heading from "@/components/Heading";
import styles from "../styles/404.module.scss"

const Error: FC = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>404</title>
      </Head>
      <Heading text={"404"}/>

      <p>Something is going wrong...</p>
    </div>
  )
}

export default Error;
