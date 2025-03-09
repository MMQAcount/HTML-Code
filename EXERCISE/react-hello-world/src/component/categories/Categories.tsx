import Category from "../category/Category";

const data = [
    {
        id : "e1",
        title : "Moda IMG",
        image : "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
    },
    {
        id : "e2",
        title : "Moda IMG",
        image : "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
    },
    {
        id : "e3",
        title : "Moda IMG",
        image : "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
    },
    {
        id : "e4",
        title : "Moda IMG",
        image : ""
    }
]

const Categorise = () => {
    return(
      <div className='categorise'>
          <h1>Categorise</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima molestiae optio ex ipsa illo ipsum saepe quia nam, fugit, amet a cum facilis placeat dolor autem iure consequatur odio.</p>
        <div className='categorise_list'>
            {
                data.map(cat => <Category key={cat.id} title={cat.title} image={cat.image} />)
            }
        </div>
      </div>
    );
}

export default  Categorise;
