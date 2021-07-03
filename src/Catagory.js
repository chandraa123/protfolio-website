import React from 'react'
import "./Catagory.css";

function Catagory() {
    return (
        <div className = "header__catagory">


<div className ="header__option" >
    <span className="header__optionall">All</span>
        </div>

<div className = "header__option">
    <span className="header__bestseller">Best Sellers</span>
      </div>
<div className = "header__option">
<span className="header__mobile">Mobiles</span>
</div>
<div className = "header__option">
<span className="header__deal">Today's Deals</span>
</div>
<div className = "header__option">
<span className="header__fashion">Fashion </span>
</div>
<div className = "header__option">
<span className="header__prime">Prime</span>
</div>
<div className = "header__option">
<span className="header__electronics">Electronics</span>
</div>
<div className = "header__option">
<span className="header__customer">Customer Service</span>
</div>
<div className = "header__option">
<span className="header__amazon">Amazon Pay</span>
</div>

<img className="header__app"
src ="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
alt = "app"/>

        </div>
    )
}

export default Catagory

/*Best Sellers
Mobiles
Today's Deals
Fashion
New Releases
Prime
Electronics
Customer Service
Amazon Pay*/