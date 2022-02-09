import Link from 'next/link'
import Image from 'next/image'

import SearchBar from "./SearchBar"
const NavBar = () => {


    return (  
        <nav className="topNav">
            <div className = "logo">
                <Link href= "/" passHref><a><Image src="/SideBySideUnB-01.png" height = "37" width = "140" /></a></Link>
            </div>
                <SearchBar/>
            <div className="navOptions">
                <Link href="/"><a><strong> Home</strong></a></Link>
                <Link href = "/myCollection"><a><strong> My Collection</strong></a></Link>
                <Link href = "/addCards"><a><strong>Add Cards</strong></a></Link>
            </div>

        </nav>
    );
}
 
export default NavBar;