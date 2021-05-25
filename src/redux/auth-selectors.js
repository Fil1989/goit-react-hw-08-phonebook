const getIsAunticated = state => state.isAutenticated;
const getUserLogin = state => state.user.name;
// eslint-disable-next-line react-hooks/exhaustive-deps
export default { getIsAunticated, getUserLogin };
