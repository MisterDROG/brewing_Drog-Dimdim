
const getDataPH = () => {
    return fetch('https://test-e79a5-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        console.log(response)
        console.log(response.json())
        return response.json();
    })
}

export default getDataPH