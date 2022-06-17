const userArray = {
    users: [
        {
            inn: 22203199301324,
            password: 12345678,
        },
        {
            inn: 123,
            password: 123,
        },
    ]
};

export const accountStore = (state = userArray, action) => {
    switch (action.type) {
        case "add_user":
            return { ...state, users: [...state.users, action.payload] }
        default:
            return userArray;
    };
}


