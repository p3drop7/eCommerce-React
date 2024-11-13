export const initialCartState = null

export const cartReducer = (state, action) => {

    switch (action.type) {

        case 'GET_CART' : {
            if( action.payload.user in action.payload.response){
                return action.payload.response[action.payload.user]
            }
            break
        }
        
        case 'ADD_ITEM': {

            if(!state){
                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }

                const newCart = {
                    products: [newItem],
                    totalQuantity: 1,
                    totalPrice: action.payload.price
                }
                return newCart

            }else if( state.products.find(item => item.id === action.payload.id) ) {
                
                const newItems = state.products.map(item => {
                    if(item.id === action.payload.id){
                        const newProdQuantity = item.quantity + 1
                        const newProdTotal = newProdQuantity * item.price
                        item.quantity = newProdQuantity
                        item.total = newProdTotal
                    }
                    return item
                })

                let newTotalPrice = 0
                newItems.forEach(item => {
                    newTotalPrice = newTotalPrice + item.total
                })
                newTotalPrice = newTotalPrice.toFixed(2)

                let newTotalQuantity = 0
                newItems.forEach(item => {
                    newTotalQuantity = newTotalQuantity + item.quantity
                })

                const newCart = {
                    products: newItems,
                    totalQuantity: newTotalQuantity,
                    totalPrice: newTotalPrice
                }
                return newCart
                
            }else{
                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }

                const newItemList = [...state.products, newItem]

                let newTotalPrice = 0
                newItemList.forEach(item => {
                    newTotalPrice = newTotalPrice + item.total
                })
                newTotalPrice = newTotalPrice.toFixed(2)

                let newTotalQuantity = 0
                newItemList.forEach(item => {
                    newTotalQuantity = newTotalQuantity + item.quantity
                })

                const newCart = {
                    products: [...state.products, newItem],
                    totalQuantity: newTotalPrice,
                    totalPrice: newTotalQuantity
                }

                return newCart
            }
        }

        case 'REMOVE_ITEM': {
            
            const newProdList = state.products.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = item.quantity - 1
                }
                if(item.quantity === 0){
                    return null
                }
                return item
            })

            const newCleanProdList = newProdList.filter(item => item !== null)

            let newTotalPrice = 0
            newCleanProdList.forEach(item => {
                newTotalPrice = newTotalPrice + item.total
            })
            newTotalPrice = newTotalPrice.toFixed(2)

            let newTotalQuantity = 0
            newCleanProdList.forEach(item => {
                newTotalQuantity = newTotalQuantity + item.quantity
            })

            const newCart = {
                products: newCleanProdList,
                totalQuantity: newTotalPrice,
                totalPrice: newTotalQuantity
            }

            if(newCart.products.length === 0) return initialCartState
            return newCart
        }    
        
        case 'EMPY_CART': {
            state = initialCartState
            break
        }

        default: {
            break
        }
    }    
}