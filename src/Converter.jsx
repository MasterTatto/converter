import React from 'react';

const Converter = (props) => {
    const changeInput = props.isBuying ? (
        <div className={'changeMain'}>
            <div className={'currentChange'}>
                <p>You give the next amount of BYN:</p>
                <input onChange={props.culcCurrency} type="text" data-curent={'byn'} value={props.amountOfBYN}
                />
            </div>
            <div className={'currentChange'}>
                <p>You give the next amount of {props.currentCurrency}:</p>
                <input onChange={props.culcCurrency} type="text" data-curent={'currency'} value={props.amountOfCurrency}
                />
            </div>
        </div>
    ) : (
        <div className={'changeMain'}>

            <div className={'currentChange'}>
                <p>You give the next amount of {props.currentCurrency}:</p>
                <input onChange={props.culcCurrency} type="text" data-curent={'currency'} value={props.amountOfCurrency}
                />
            </div>
            <div className={'currentChange'}>
                <p>You give the next amount of BYN:</p>
                <input onChange={props.culcCurrency} type="text" data-curent={'byn'} value={props.amountOfBYN}
                />
            </div>
        </div>
    )
    const btn = props.currencyName.map((n, i) => {
        return <button onClick={() => props.changeCurrency(n)} key={i}
                       className={props.currentCurrency === n ? 'btnActive' : 'btn'}>{n}</button>
    })
    return (
        <div className={'main'}>
            <h1 className={'h1'}>Currency exchange</h1>
            <div className={'currentCur'}>
                <p>Current currency :</p>
                <div>
                    {btn}
                </div>
            </div>
            <div className={'SellBuy'}>
                <button className={props.isBuying ? 'active' : 'SellBuyBtn'}
                        data-action={'buy'} onClick={props.changeSellBuy}>Buy
                </button>
                <button className={!props.isBuying ? 'active' : 'SellBuyBtn'}
                        data-action={'sell'} onClick={props.changeSellBuy}>Sell
                </button>
            </div>
            <p>Currency rate: {props.currencyRate}</p>
            {changeInput}

        </div>
    );
};

export default Converter;
