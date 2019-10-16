const userReducer = (state = false, action) => {
    switch(action.type) {
        case "Logged in":
            return !state;
        default:
            return state;
    }
}

export default userReducer;