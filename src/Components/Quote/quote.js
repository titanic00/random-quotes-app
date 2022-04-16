import { useSelector } from "react-redux";

export function Quote(props) {
    const jsonObject = useSelector(state => {
        console.log(state);
        const {getQuoteReducer} = state;
        return getQuoteReducer.quote;
    });
    return (
        <div>
            <h1>{jsonObject.content}</h1>
            <h1>{jsonObject.author}</h1>
        </div>
    )
}