const isAuth = {
    auth: false
};

export const authStore = (state = isAuth,action)=>{
switch(action.type){
    case "change":
        return{...state, auth:action.payload}
    default: 
        return state;
};

}
export const isAuthChange = (payload) =>({type:"change",payload});
