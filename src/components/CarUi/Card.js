
import "./Card.css";
function Card(props){
    const classes = 'card ' + props.className ;
return  <div className={classes}>{props.children}</div>    ;

}
//console.log(Card);
export default Card;