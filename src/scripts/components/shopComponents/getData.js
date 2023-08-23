const getDataPH = () => {
    return fetch('https://boiz-e87ea-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json();
    })
}

export default getDataPH