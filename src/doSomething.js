// Change the js file in a way that re-deploy on mount
// so Make a simple server here 
const prices = [1,2,3,4,5]
function mapOneLiner(){
    const discountedPrices = prices.map(price => price*0.5)
    return discountedPrices 
}


console.log(mapOneLiner())