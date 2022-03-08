
const postes = {
    'ALG': 'Ailier Gauche',
    'ARG': 'Arriere Gauche',
    'DC': 'Demi Centre',
    'ARD': 'Arriere Droit',
    'ALD': 'Ailier Droit',
    'P': 'Pivot',
    'GB': 'Gardien'
}


function getLabel(poste) {
    return postes[poste]
}

function getKey(label) {
    return Object.keys(postes).find(key => postes[key] === label);
}

function getPosteSelectOptions() {
    return [
        {
            label: 'Ailier Gauche',
            value: 'ALG'
        },
        {
            label: 'Arriere Gauche',
            value: 'ARG'
        },
        {
            label: 'Demi-centre',
            value: 'DC'
        },
        {
            label: 'Arriere Droit',
            value: 'ARD'
        },
        {
            label: 'Ailier Droit',
            value: 'ALD'
        },
        {
            label: 'Pivot',
            value: 'P'
        },
        {
            label: 'Gardien',
            value: 'GB'
        },
    ]
}

export default {
    getLabel,
    getKey,
    getPosteSelectOptions
}
