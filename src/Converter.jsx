import React from 'react';

const Converter = () => {


    return (
        <div className={'main'}>
            <h1 className={'h1'}>Currency exchange</h1>
            <div className={'currentCur'}>
                <p>Current currency :</p>
                <div>
                    <button className={`btn`}>USD</button>
                    <button className={`btn`}>USD</button>
                    <button className={`btn`}>USD</button>
                </div>
            </div>
            <div className={'SellBuy'}>
                <button className={'SellBuyBtn'}
                        data-action={'buy'}>Buy
                </button>
                <button className={'SellBuyBtn'}
                        data-action={'sell'}>Sell
                </button>
            </div>
            <p>Currency rate: 3.23</p>
            <div className={'changeMain'}>
                <div className={'currentChange'}>
                    <p>You give the next amount of BYN:</p>
                    <input type="text" data-curent={'byn'}
                    />
                </div>
                <div className={'currentChange'}>
                    <p>You give the next amount of USD:</p>
                    <input type="text" data-curent={'currency'}
                    />
                </div>

            </div>

        </div>
    );
};

export default Converter;
