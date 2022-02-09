import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from 'next/head';
const layout  = ({children}) => {
    return ( 
        <>
        <Head> <title>Unbound</title></Head>
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
        </>
     );
}
 
export default layout;