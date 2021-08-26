let initialState = {
    currencies: [
        // {
        //     currencyName: '',
        //     buyRate: '',
        //     sellRate: 2.58,
        // },
        // {
        //     currencyName: 'EUR',
        //     buyRate: 3.1,
        //     sellRate: 3.06,
        // },
        // {
        //     currencyName: 'RUR',
        //     buyRate: 0.0345,
        //     sellRate: 0.0341,
        // },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const ConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_SELL':
            return {
                ...state,
                isBuying: action.isBuying,
                amountOfBYN: '',
                amountOfCurrency: ''
            }
        case 'CHANGE_CURRENCY' :
            return {
                ...state,
                currentCurrency: action.currency,
                amountOfBYN: '',
                amountOfCurrency: ''
            }
        case 'CULI_CURRENCY' :
            return {
                ...state,
                amountOfBYN: action.amountOfBYN,
                amountOfCurrency: action.amountOfCurrency

            }
        case 'ADD_CURRENCY' :
            let newCurrency = action.currency
            return {
                ...state,

                currencies: [...state.currencies , newCurrency]
            }
        default:
            return state
    }
}

export const AddCurrencyAC = (currency) => {
    return {
         type:'ADD_CURRENCY',currency

    }
}

export const BuySellAC = (isBuying) => {
    return {
        type: 'BUY_SELL', isBuying
    }
}
export const ChangeCurrencyAC = (currency) => {
    return {
        type: 'CHANGE_CURRENCY', currency
    }
}
export const CulcCurrencyAC = (amountOfBYN, amountOfCurrency) => {
    return {
        type: 'CULI_CURRENCY', amountOfBYN, amountOfCurrency
    }
}
