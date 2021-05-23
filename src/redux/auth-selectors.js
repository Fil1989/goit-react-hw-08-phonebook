const getIsAunticated = state => state.token;
const getUserLogin = state => state.user.name;
// eslint-disable-next-line react-hooks/exhaustive-deps
export default { getIsAunticated, getUserLogin };
