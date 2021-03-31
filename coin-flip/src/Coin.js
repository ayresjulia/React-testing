import React, { useState } from "react";
import _ from "lodash";
import "./Coin.css";

const Coin = (props) => {
	const [ coin, setCoin ] = useState(_.shuffle(props.coin_url)[0]);
	const [ count, setCount ] = useState(0);
	const [ head, setHead ] = useState(0);
	const [ tail, setTail ] = useState(0);

	const flip = () => {
		let shuffle = _.shuffle(props.coin_url)[0];
		setCoin(shuffle);
		shuffle === props.coin_url[0] ? setHead(head + 1) : setTail(tail + 1);
		setCount(count + 1);
	};
	// coin is showing only when count > 0
	const isShowing = count !== 0;

	return (
		<div className="Coin">
			<h1>Let's flip a coin!</h1>
			{isShowing && <img data-testid="coin-img" className="Coin-img" src={coin} alt="" />}
			<div>
				<button data-testid="coin-btn" className="Coin-btn" onClick={flip}>
					FLIP ME
				</button>
			</div>
			<p data-testid="coin-count">
				Out of {count} flips, there have been {head} heads and {tail} tails.
			</p>
		</div>
	);
};

Coin.defaultProps = {
	coin_url: [
		"https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg",
		"https://i.ebayimg.com/images/g/wGEAAOSwYu1crzzn/s-l400.jpg"
	]
};

export default Coin;
