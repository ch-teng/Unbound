import {useState} from 'react'
import {useRouter} from 'next/router'



const SearchBar = () => {
    const [cardName, setCardName] = useState("");
    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();
        const str = cardName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        const res = await fetch('https://api.scryfall.com/cards/named?fuzzy=' + str);
        const data = await res.json();
        if(data.status === 404) {
            router.push('/search');
        } else {
            const urlName = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            router.push('/search/' + urlName);
        }

    }

    return ( 
        <form onSubmit= {handleSubmit} >
            <input type="text" value= {cardName} onChange={e => setCardName(e.target.value)} placeholder = "Search for a card..."/>
        </form>
     );
}
 
export default SearchBar;