import React, {useEffect, useState} from 'react';
import Converter from "../Converter";
import {useDispatch, useSelector} from "react-redux";
import {select} from "../redux/selected";
import {
    AddCurrencyAC,
    AddCurrencyNameAC,
    AddUSDCurrencyAC,
    BuySellAC,
    ChangeCurrencyAC,
    CulcCurrency,
    CulcCurrencyAC
} from "../redux/converter-reducer";
import axios from "axios";
import {logDOM} from "@testing-library/react";

const ConverterContainer = () => {
    const [load, setLoad] = useState(false)
    const state = useSelector(select)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoad(true)
        axios.get('https://www.nbrb.by/api/exrates/rates/usd?parammode=2')
            .then(response => {
                    setLoad(false)
                    dispatch(AddCurrencyAC(response.data))
                }
            )

    }, [])
    //
    useEffect(() => {
        setLoad(true)
        axios.get('https://www.nbrb.by/api/exrates/rates/978?parammode=1')
            .then(response => {
                setLoad(false)
                dispatch(AddCurrencyAC(response.data))
            })

    }, [])
    //
    useEffect(() => {
        setLoad(true)
        axios.get('https://www.nbrb.by/api/exrates/rates/643?parammode=1')
            .then(response => {
                setLoad(false)
                dispatch(AddCurrencyAC(response.data))
            })

    }, [])
    //
    //
    let currencyRate = 0;
    const currencyName = state.currencies.map((n) => {
        console.log(n)
        if (state.currentCurrency === n.Cur_Abbreviation) {
            currencyRate = state.isBuying ? +Number(n.Cur_OfficialRate) : +Number(n.Cur_OfficialRate)
        }
        if(state.currentCurrency === 'RUB'){
            currencyRate = state.isBuying ? (+Number(n.Cur_OfficialRate) / +Number(100)) : (+Number(n.Cur_OfficialRate) / +Number(100))
        }
        return n.Cur_Abbreviation
    })
    console.log(state)

    function changeCurrency(value) {
        dispatch(ChangeCurrencyAC(value))
    }


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

    return load ? <div>Wait pleas</div> :
        <Converter isBuying={state.isBuying} changeSellBuy={changeSellBuy} currencyRate={currencyRate}
                   currencyName={currencyName} currentCurrency={state.currentCurrency}
                   changeCurrency={changeCurrency} culcCurrency={culcCurrency}
                   amountOfBYN={state.amountOfBYN}
                   amountOfCurrency={state.amountOfCurrency}/>
};


export default ConverterContainer
