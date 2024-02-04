// An array containing country objects
let countriesData = [
    { id: 1, name: 'Finland', flag: '🇫🇮', isNordic: true },
    { id: 2, name: 'Sweden', flag: '🇸🇪', isNordic: true },
    { id: 3, name: 'Spain', flag: '🇪🇸', isNordic: false }
];
let nextIdNr = 4;

exports.get_countries = (req, res) => {
    res.status(200).send(countriesData);
}

exports.get_country = (req, res) => {
    const countryId = parseInt(req.params.id);
    const countryIndex = countriesData.findIndex(country => country.id === countryId);
    
    if (countryIndex === -1) {
        res.status(404).send('Country not found');
    }

    res.status(200).send(countriesData[countryIndex])
}

exports.add_country = (req, res) => {
    const countryId = nextIdNr;
    const { name, flag, isNordic } = req.body;
    nextIdNr++;

    if (name === undefined) {
        res.status(400).send({ message: 'We need a name!' })
    }

    if (flag === undefined) {
        res.status(400).send({ message: 'We need a flag!' })
    }

    if (isNordic === undefined) {
        res.status(400).send({ message: 'We need to know if the country is nordic!' })
    }

    countriesData.push({
        id: countryId, name: name, flag: flag, isNordic: isNordic
    })

    res.status(201).send({
        id: countryId,
        name: name,
        flag: flag,
        isNordic: isNordic
    })
}

exports.update_country = (req, res) => {
    const countryId = parseInt(req.params.id);
    const { name, flag, isNordic } = req.body;

    const countryIndex = countriesData.findIndex(country => country.id === countryId);
    if (countryIndex === -1) {
        res.status(404).send('Country not found');
    }

    if (name !== undefined) {
        countriesData[countryIndex].name = name;
    }
    if (flag !== undefined) {
        countriesData[countryIndex].flag = flag;
    }
    if (isNordic !== undefined) {
        countriesData[countryIndex].isNordic = isNordic;
    }

    res.status(200).send(countriesData[countryIndex])
}

exports.delete_country = (req, res) => {
    const countryId = parseInt(req.params.id);

    const countryIndex = countriesData.findIndex(country => country.id === countryId);
    if (countryIndex === -1) {
        res.status(404).send('Country not found');
    }

    const countryToDelete = countriesData[countryIndex];
    countriesData.splice(countryIndex, 1);

    res.status(200).send(countryToDelete);
}