
const POSITIVE = 'positive'
const NEGATIVE = 'negative'

const positiveActions = [
    {
        type: "BUT",
        text: "BUT",
        isChangingSide: true,
        isAttackingSide: true
    },
    {
        type: 'TIR',
        text: 'TIR',
        isChangingSide: true,
        isAttackingSide: true
    },
    {
        type: 'ARRET',
        text: 'ARRET',
        isChangingSide: true,
        isAttackingSide: false
    },
    {
        type: 'CA',
        text: 'CONTRE-ATTAQUE',
        isChangingSide: true,
        isAttackingSide: false
    },
]

const negativeActions = [
    {
        type: 'FAUTE',
        text: 'FAUTE',
        isChangingSide: false,
        isAttackingSide: false
    },
    {
        type: 'CJ',
        text: 'CARTON JAUNE',
        isChangingSide: false,
        isAttackingSide: false

    },
    {
        type: 'DMIN',
        text: '2 MINUTES',
        isChangingSide: false,
        isAttackingSide: false
    },
    {
        type: 'CR',
        text: 'CARTON ROUGE',
        isChangingSide: false,
        isAttackingSide: false
    },
    {
        type: 'TR',
        text: 'TIR RATE',
        isChangingSide: false,
        isAttackingSide: true
    },
    {
        type: 'PIED',
        text: 'PIED',
        isChangingSide: true,
        isAttackingSide: true
    },
]

export default {
    POSITIVE,
    NEGATIVE,
    positiveActions,
    negativeActions
}
