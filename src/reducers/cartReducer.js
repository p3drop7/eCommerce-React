export const initialCartState = []

export const cartReducer = (state, action) => {
    switch (action.type) {
        
        case 'ADD_ITEM': {

            if( state.find( item => item.id === action.payload.id )){
                const index = state.findIndex(item => item.id === action.payload.id)
                const newQuantity = state[index].quantity + 1
                state.splice(index, 1)
                const newCart = [...state, {id: action.payload.id, title: action.payload.title, quantity: newQuantity}]
                return newCart
            }
            
            // if the item is not in the cart, we add 1 new
            const newCart = [...state, {id: action.payload.id, title: action.payload.title, quantity: 1}]
            return newCart
        }

        case 'REMOVE_ITEM': {
            if( state.find(item => item.id === action.payload.id) ){
                const index = state.indexOf(action.payload.id)
                const newQuantity = state[index].quantity - 1
                
                if(newQuantity === 0){
                    state.splice(index, 1)
                }else{
                    state.splice(index, 1)
                    const newCart = [...state, {id: action.payload.id, title: action.payload.title, quantity: newQuantity}]
                    return newCart
                }
            }
            break
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