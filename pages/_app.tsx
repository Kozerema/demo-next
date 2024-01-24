import Image from "next/image";
import {AppProps} from "next/app";

import Layout from "../components/Layout";
import "../styles/global.scss";
import pets from "../public/pets.png";


const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
        <Image src={pets} width={500} height={350} alt={pets} placeholder={"blur"}/><title></title>
      </Layout>

    </>
  )
}
export default App;
