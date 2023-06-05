import bandInfo from "/lib/data.json";

export function getAllBandIds() {
    return bandInfo.bands.map((bandlist) => {
        return {
            params: {
                id: bandlist.id
            },
        }
    });
}
export const getBandData = (id) => bandInfo.bands.find(band => band.id === id)