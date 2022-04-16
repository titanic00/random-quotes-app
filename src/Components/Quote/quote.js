import { useSelector } from "react-redux";

export function Quote(props) {
    const jsonObject = useSelector(state => {
        const {getQuoteReducer} = state;
        return getQuoteReducer.quote;
    });

    return (
        <div>
            <h1 id="text">{jsonObject.content}</h1>
            <h1 id="author">{jsonObject.author}</h1>
        </div>
    )
}