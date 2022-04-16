import { useSelector } from "react-redux";
import './quote.css';

export function Quote(props) {
    const jsonObject = useSelector(state => {
        const {getQuoteReducer} = state;
        return getQuoteReducer.quote;
    });

    const color = useSelector((state) => {
        const { getColorReducer } = state;
        return getColorReducer.color;
      });

    return (
        <div id="quote-section">
            <h1 id="text" style={{color: color}}>{jsonObject.content}</h1>
            <h2 id="author" style={{color: color}}>-{jsonObject.author}</h2>
        </div>
    )
}