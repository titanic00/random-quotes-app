import { Quote } from "../Quote/quote";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuoteRequest } from "../../Redux/Actions/actions";

export function QuotesSection(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(getQuoteRequest());
    }

    useEffect(() => {
        dispatch(getQuoteRequest());
    }, []);

    return (
      <div>
        <Quote />
        <button><i className="fa-brands fa-twitter"></i></button>
        <button><i className="fa fa-tumblr"></i></button>
        <button onClick={handleClick}>New quote</button>
      </div>
    );
  }