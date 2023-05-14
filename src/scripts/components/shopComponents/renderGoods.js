const renderGoods = (data) => {
    const goodsContainer = document.querySelector('.goods');

    goodsContainer.innerHTML = '';

    localStorage.setItem('goods', JSON.stringify(data))

     data.forEach((item) => {
        goodsContainer.insertAdjacentHTML('beforeend', `
        <div class="card" data-key="${item.id}">
            ${(item.new) ? '<div class="card-sale">🔥NEW🔥</div>': ''}
            <div class="card-img-wrapper">
                <span class="card-img-top" style="background-image: url('${item.img}')"></span>
            </div>
            <div class="card-body">
                <div class="card-price">${item.price} ₽</div>
                <h5 class="card-title">"${item.title}"</h5>
                <h5 class="card-subtitle">${item.subtitle}</h5>
                <button class="btn">В корзину</button>
            </div>
        </div>`)

     })

}

export default renderGoods