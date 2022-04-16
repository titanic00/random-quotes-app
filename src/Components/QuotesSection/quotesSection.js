import { Quote } from "../Quote/quote";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuoteRequest, getColor } from "../../Redux/Actions/actions";
import "./quoteSection.css";

export function QuotesSection(props) {
  const dispatch = useDispatch();
  const jsonObject = useSelector((state) => {
    const { getQuoteReducer } = state;
    return getQuoteReducer.quote;
  });

  const color = useSelector((state) => {
    const { getColorReducer } = state;
    return getColorReducer.color;
  });

  const handleClick = () => {
    dispatch(getQuoteRequest());
    dispatch(getColor());
  };

  useEffect(() => {
    dispatch(getQuoteRequest());
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
    body.style.transition = '500ms';
  }, [color]);

  return (
    <div id="quote-box">
      <Quote />
      <div id="buttons-section">
        <div className="post-button" style={{backgroundColor: color, transition: '500ms'}}>
          <a
            href={"https://twitter.com/intent/tweet?text=" + jsonObject.content}
            target="_up"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="post-button" style={{backgroundColor: color, transition: '500ms'}}>
          <a href="http://tumblr.com" target="blank">
            <i className="fa fa-tumblr"></i>
          </a>
        </div>
        <button id="new-quote" onClick={handleClick} style={{backgroundColor: color, transition: '500ms'}}>
          New quote
        </button>
      </div>
    </div>
  );
}