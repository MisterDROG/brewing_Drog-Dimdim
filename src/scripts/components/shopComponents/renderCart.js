const renderCart = (data) => {
    const cartContainer = document.querySelector('.cart-wrapper');

    cartContainer.innerHTML = '';

    if (data.length === 0) {
        cartContainer.insertAdjacentHTML('beforeend', `
        <div id="cart-empty">
        Ваша корзина пока пуста
        </div>`)
    } else {
        data.forEach((item) => {
            cartContainer.insertAdjacentHTML('beforeend', `
                    <div class="card" data-key="${item.id}">
                        ${(item.new) ? '<div class="card-sale">🔥NEW🔥</div>': ''}
                        <div class="card-img-wrapper">
                            <span class="card-img-top" style="background-image: url('${item.img}')"></span>
                        </div>
                        <div class="card-body">
                            <div class="card-price">${item.price} ₽</div>
                            <h5 class="card-title">"${item.title}"</h5>
                            <h5 class="card-subtitle">${item.subtitle}</h5>
                            <button class="btn btn-primary">Удалить</button>
                        </div>
                    </div>`)
        })
    }
}

export default renderCart