import Link from "next/link";

const notFound = () => {
    return ( 
        <div className = "not-found">
            <h1>404: This page has been bounded!</h1>
            <p><Link href= "/"><a>Go back to the Homepage!</a></Link></p>
        </div>
     );
}
 
export default notFound;