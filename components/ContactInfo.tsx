import {FC} from "react";

import Heading from "./Heading";
import {contactType} from "@/types";

type contactInfoProps = {
  contact: contactType
}

const ContactInfo: FC<contactInfoProps> = ({contact}) => {
  const {name, email, address} = contact || {};
  const {street, suite, city} = address || {};

  if (!contact) {
    return <Heading tag={"h3"} text={"Empty contact"}/>
  }

  return (
    <>
      <Heading tag={"h3"} text={name}/>
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        Street: {street} - Suite: {suite} - City:{city}
      </div>
    </>
  )

};


export {ContactInfo};
