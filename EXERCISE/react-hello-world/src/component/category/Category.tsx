interface Iprops {
    title : string;
    image? : string;
}

const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s";

const Category = (props : Iprops) => {
    return (
      <div className='category'>
        {props.title.toUpperCase()}
        <hr />
        {
            props.image
            ? <img src = {props.image} width = {170} height={150}/> 
            : <img src = {DEFAULT_IMAGE} width = {170} height={150}/> 
        }
      </div>
    );
}

export default  Category;