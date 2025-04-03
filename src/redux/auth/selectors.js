export const selectUserName = (state) => state.auth.user?.displayName;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
