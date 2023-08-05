import bandInfo from '/lib/data.json'

export const getAllBandIds = () =>
    bandInfo.bands.map((bandlist) => ({
        params: {
            id: bandlist.id,
        },
    }))

export const getBandData = (id) => bandInfo.bands.find((band) => band.id === id)
