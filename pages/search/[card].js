import Image from 'next/image'
import {useState} from 'react';
// IN ORDER TO RUN LOCAL JSON FILES YOU NEED TO SPIN UP A JSON SERVER
//IN NEW TERMINAL TO THE BOTTOM RIGHT
//npx json-server --watch pages/2XM.json --port 8000
export const getStaticPaths = async() => {

    const res = await fetch('http://localhost:8000/data');
    const data = await res.json();

    const paths = data.cards.map((card) => {
        return {params: {card: card.name}}
    })

    return { 
        paths,
        fallback: true
    }
}

export const getStaticProps = async(context) => {
    const cardName = context.params.card;

    const resCard = await fetch('https://api.scryfall.com/cards/named?exact=' + cardName);
    const dataCard = await resCard.json();

    const resPrintings = await fetch(dataCard.prints_search_uri);
    const dataPrintings = await resPrintings.json();

    return {
        props: {
            cardInfo: dataCard, 
            LoPrintings: dataPrintings
        },
    }
}

const Details = ({cardInfo, LoPrintings}) => {
    if(!cardInfo || !LoPrintings) {
        return (<div>Loading...</div>)
    }
    //set to the inital printing
    const [printing,setPrinting] = useState(LoPrintings.data[0]);
    //console.log(printing);
    //create a map that takes in printings and returns radio buttons all with the condition that if they are selected, update the image to that printing
    const cardImg = printing.image_uris.large;

    function createRadioPrintings() {
        return (<div className="card">
                    {LoPrintings.data.map((print, index) => (
                        <label>{print.set_name}<input type="radio" name="printType" defaultChecked={index===0} onClick={() => setPrinting(print)}/></label>
                    ))}
                </div>
        )
    }

    //prices
    const normPrice = printing.prices.usd || "N/A";
    const foilPrice = printing.prices.usd_foil || "N/A";
    return ( 
        <div>
            <div>Card attributes: </div>
            <div>{cardInfo.name}</div>
            <Image src={cardImg} width = "244" height= "340" className="card"/>
            <div>{createRadioPrintings()}</div>
            <div>Prices:</div>
            <ul>
                <li>Normal: {normPrice}</li>
                <li>Foil: {foilPrice}</li>
            </ul>
        </div>
    );
}
 
export default Details;