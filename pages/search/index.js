// export const getStaticProps = async() => {
//     const res = await fetch('http://localhost:8000/data');
//     const data = await res.json();
//     return {
//         props: {cardList: data.cards},
//         revalidate:10
//     }
// }
const EmptySearch = ({cardList}) => {

    if(!cardList) {
        return(
        <div>
            Please search a card!
            <nav className="level">
  <div className="level-left">
    <div className="level-item">
      <p className="subtitle is-5">
        <strong>123</strong> posts
      </p>
    </div>
    <div className="level-item">
      <div className="field has-addons">
        <p className="control">
          <input className="input" type="text" placeholder="Find a post" />
        </p>
        <p className="control">
          <button className="button">
            Search
          </button>
        </p>
      </div>
    </div>
  </div>

  <div className="level-right">
    <p className="level-item"><strong>All</strong></p>
    <p className="level-item"><a>Published</a></p>
    <p className="level-item"><a>Drafts</a></p>
    <p className="level-item"><a>Deleted</a></p>
    <p className="level-item"><a className="button is-success">New</a></p>
  </div>
</nav>
        </div>)
    }
    return ( 
        <div>
            <h1>List of All Cards In 2XM</h1>
            {cardList.map(card => (
                <div className={card.name}>{card.name}</div>
            ))}
        </div>


                
     );
}
 
export default EmptySearch;