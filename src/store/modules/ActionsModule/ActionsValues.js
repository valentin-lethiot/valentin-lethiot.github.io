
const POSITIVE = 'positive'
const NEGATIVE = 'negative'

const positiveActions = [
    {
        type: "BUT",
        text: "BUT",
    },
    {
        type: 'TIR',
        text: 'TIR',
    },
    {
        type: 'ARRET',
        text: 'ARRET',
    },
    {
        type: 'CA',
        text: 'CONTRE-ATTAQUE',
    },
]

const negativeActions = [
    {
        type: 'FAUTE',
        text: 'FAUTE'
    },
    {
        type: 'CJ',
        text: 'CARTON JAUNE'
    },
    {
        type: 'DMIN',
        text: '2 MINUTES'
    },
    {
        type: 'CR',
        text: 'CARTON ROUGE'
    },
    {
        type: 'TR',
        text: 'TIR RATE'
    },
    {
        type: 'PIED',
        text: 'PIED'
    },
]

export default {
    POSITIVE,
    NEGATIVE,
    positiveActions,
    negativeActions
}
