import {FC} from "react";
import {GetServerSideProps} from "next";
import Head from "next/head";

import {ContactInfo} from "@/components/ContactInfo";
import {contactType} from "@/types";

//Server-Side Rendering (SSR)

type contactTypeProps = {
  contact: contactType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params as {id:string};
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if(!response.ok){
    throw new Error(`Failed to fetch user data. Status: ${response.status}`);
  }

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contact: data},
  }

}

const Contact: FC<contactTypeProps> = ({contact}) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact}/>

    </>
  )
}

export default Contact;

