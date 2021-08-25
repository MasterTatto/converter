import React from 'react';
import Converter from "../Converter";
import {useDispatch, useSelector} from "react-redux";
import {select} from "../redux/selected";
import {BuySellAC, ChangeCurrencyAC, CulcCurrency, CulcCurrencyAC} from "../redux/converter-reducer";

const ConverterContainer = () => {
    const state = useSelector(select)
    const dispatch = useDispatch()
    let currencyRate = 0;
    const currencyName = state.currencies.map((n) => {
        if (state.currentCurrency === n.currencyName) {
            currencyRate = state.isBuying ? n.buyRate : n.sellRate

        }
        return n.currencyName
    })

    function changeCurrency(value) {
        dispatch(ChangeCurrencyAC(value))
    }

    console.log(state)

    function changeSellBuy(e) {
        e.currentTarget.dataset.action === 'buy' ? dispatch(BuySellAC(true)) : dispatch(BuySellAC(false))
    }

    function culcCurrency(e) {
        const target = e.currentTarget.dataset.curent
        const value = e.currentTarget.value
        if (!isFinite(+value)) return
        if (target === 'byn') {
            if (value === '') {
                dispatch(CulcCurrencyAC(value, value))
            } else {
                dispatch(CulcCurrencyAC(value, (+Number(value) / currencyRate.toFixed(2)).toFixed(2)))
            }
        } else {
            if (value === '') {
                dispatch(CulcCurrencyAC(value, value))
            } else {
                dispatch(CulcCurrencyAC((+Number(value) * currencyRate.toFixed(2)).toFixed(2), value))
            }
        }
    }

    return <Converter isBuying={state.isBuying} changeSellBuy={changeSellBuy} currencyRate={currencyRate}
                      currencyName={currencyName} currentCurrency={state.currentCurrency}
                      changeCurrency={changeCurrency} culcCurrency={culcCurrency}
                      amountOfBYN={state.amountOfBYN}
                      amountOfCurrency={state.amountOfCurrency}/>
};

export default ConverterContainer;
