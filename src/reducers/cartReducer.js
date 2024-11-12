export const initialCartState = []

export const cartReducer = (state, action) => {

    switch (action.type) {
        
        case 'ADD_ITEM': {
            if( state.find( item => item.id === action.payload.id )){

                const newCart = state.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity = item.quantity + 1
                    }
                    return item
                })
                return newCart
            }
            
            // if the item is not in the cart, we add 1 new
            const newCart = [ 
                ...state, 
                {
                    id: action.payload.id, 
                    title: action.payload.title, 
                    image: action.payload.image, 
                    category: action.payload.category, 
                    quantity: 1
                }]
            return newCart
        }

        case 'REMOVE_ITEM': {
            const newCart = state.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = item.quantity -1
                    return item
                } else {
                    return item
                }
            }).filter(item => item.quantity !== 0)
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