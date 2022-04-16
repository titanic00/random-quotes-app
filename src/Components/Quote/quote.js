import { useSelector } from "react-redux";
import './quote.css';

export function Quote(props) {
    const jsonObject = useSelector(state => {
        const {getQuoteReducer} = state;
        return getQuoteReducer.quote;
    });

    return (
        <div id="quote-section">
            <h1 id="text">{jsonObject.content}</h1>
            <h2 id="author">-{jsonObject.author}</h2>
        </div>
    )
}