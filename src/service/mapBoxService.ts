import cities from '../mock/cities.json'
export const fetchCitiesNames = async (text: string) => {
    try {
        if (!text) return []
        const filteredCities = cities.filter(city => city.label.toUpperCase().startsWith(text.toUpperCase()))
        filteredCities.map(x => x.label)
    } catch (err) {
        console.log(err)
        return [];
    }
};