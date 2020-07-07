
const ALL_STOPS_FILTER = 'all';

export const paginationFormatter = ( queries ) => {
    const {
        limit = 20,
        offset = 0,
    } = queries;

    return{
        limit: Number(limit),
        offset: Number(offset)
    };
}

export const transferCountFormatter = ( queries ) => {

    const {
        transferCount: stops
    } = queries;

    if (stops === undefined)
        return [];

    if (typeof stops === 'string')
        if (stops === ALL_STOPS_FILTER)
            return [];
        else
            return [stops];

    if (stops .find( stop => ALL_STOPS_FILTER === stop) === undefined )
        return stops;

    return [];
}