"use client";

//import "./style.css";
import { useState } from "react";
import Head from "next/head";

export default function PageJs() {

    /*const money_input = document.getElementById("money-input");
    const crazy_input = document.getElementById("crazy-input");
    const money_button = document.getElementById("money-input-button");
    const crazy_button = document.getElementById("crazy-input-button");
    //var crazy_money = money

    money_button.addEventListener("click", () => {
        money_input.style.display="block";
        crazy_input.style.display="none";
    });

    crazy_button.addEventListener("click", () => {
        money_input.style.display="none";
        crazy_input.style.display="flex";
    });*/

    const [moneyValue, setMoneyValue] = useState(true);

    return (
        <>
            <Head>
                <title>The price you gotta pay</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            </Head>
            <main>
                <h1>The price you gotta pay</h1>
                <p className="p1">Up to ten people fight in a crazy auction to win a pixel car.</p>
                <div className="container">
                    <div className="flex">
                        <div className="auction contained flexed">
                            <h2>Current auction: pixel car</h2>
                            <img className="bid_item" src="car.png"/>
                            <br/>
                            <br/>
                            <p className="p3">
                                <strong>Starting bid:</strong> $500
                                <br/>
                                <br/>
                                Current winner: none
                                <br/>
                                <br/>
                                Current bid: none
                            </p>
                            <br/>
                            <p className="p4">
                                Bids can be normal (like <strong>$1200</strong>) or completely outrageous (like “<strong>my house</strong>” or “<strong>the population of a third world country</strong>”).
                            </p>
                        </div>
                        <div className="signup contained flexed">
                            <h2 style={{marginBottom: "30px",}}>Sign up</h2>
                            {/*<!--<p className="p2">Max ten players</p>-->*/}
                            <form>
                                <input id="name" type="text" placeholder="Name (Can be anything)" className="name"/>
                                <br/>
                                <button className="player_new">Add player</button>
                            </form>
                            <p style={{textAlign: "left", fontSize: "18px",}}>Players:</p>
                            <br/>
                            <p id="name-list"></p>
                        </div>
                    </div>
                    <div className="bid contained">
                        <h2 className="bid-h2">Place a bid</h2>
                        <div className="bidding-form">
                            <select id="bidder" className="pick-bidder">
                                <option>Select player</option>
                            </select>
                            <div>
                                <button className="bid-type-button" id="money-input-button" onClick={() => setMoneyValue(true)}>Money</button>
                                <button className="bid-type-button" id="crazy-input-button" onClick={() => setMoneyValue(false)}>Outrageous / Crazy</button>
                            </div>
                            <div className="money-input" id="money-input" style={{display: moneyValue ? "block" : "none"}}> 
                                <input id="input-money" className="input-money" type="number" placeholder="Put amount of dollars (do not type the dollar sign)"/>
                            </div>
                            <div className="crazy-input" id="crazy-input" style={{display: moneyValue ? "none" : "flex"}}>
                                <input id="input-crazy" className="input-crazy" placeholder="Item/thing to use as bid money"/>
                                <input id="vallue" className="value" placeholder="Value of the item/thing"/>
                            </div>
                            <button className="bid-submit">Submit Bid</button>
                        </div>
                    </div>
                    <br/>
                    <div className="leaderboard-container contained">
                        <h2>Leaderboard</h2>
                        <table className="leaderboard">
                            <tbody>
                            <tr>
                                <th>Player</th>
                                <th>Bid</th>
                                <th>Type</th>
                                <th>Value</th>
                            </tr>
                            <tr>
                                <td>None yet</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
};