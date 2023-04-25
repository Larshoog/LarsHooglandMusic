import bandInfo from "/lib/data.json";

export function getAllBandIds() {
    return bandInfo.bands.map((bandlist) => {
        return {
            params: {
                id: bandlist.name.replace(' ', '')
            },
        }
    });
}
export function getBandData(id) {

}