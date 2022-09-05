export default {
    requests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return state.requests.filter((req) => req.coachId === coachId);
    },
    authRequests(_, getters, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return getters.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(_, getters) {
        return getters.authRequests && getters.authRequests.length > 0;
    },
};
