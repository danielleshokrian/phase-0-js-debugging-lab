function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;
    let totalPrice = 0;
    
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
        debugger;
    }

    if (quantity >= 10) {
        debugger;
        totalPrice *= 0.9;
    }
    debugger;
    return totalPrice;
}

calculateDiscountedPrice(10, 5);

module.exports = calculateDiscountedPrice;