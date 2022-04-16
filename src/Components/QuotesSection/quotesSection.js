import { Quote } from "../Quote/quote";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuoteRequest } from "../../Redux/Actions/actions";
import "./quoteSection.css";

export function QuotesSection(props) {
  const dispatch = useDispatch();
  const jsonObject = useSelector((state) => {
    const { getQuoteReducer } = state;
    return getQuoteReducer.quote;
  });

  const handleClick = () => {
    dispatch(getQuoteRequest());
  };

  useEffect(() => {
    dispatch(getQuoteRequest());
  }, []);

  return (
    <div id="quote-box">
      <Quote />
      <div id="buttons-section">
        <div className="post-button">
          <a
            href={"https://twitter.com/intent/tweet?text=" + jsonObject.content}
            target="_up"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="post-button">
          <a href="http://tumblr.com" target="blank">
            <i className="fa fa-tumblr"></i>
          </a>
        </div>
        <button id="new-quote" onClick={handleClick}>
          New quote
        </button>
      </div>
    </div>
  );
}
