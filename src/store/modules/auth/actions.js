export default {
    async login(context, payload) {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_API_KEY}`,
            {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            }
        );

        const responseData = await response.json();

        console.log(responseData);
        if (!response.ok) {
            const error = new Error(
                responseData.error.message ||
                    "Failed to authenticate. Check your login data."
            );
            throw error;
        }

        context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    async signup(context, payload) {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FB_API_KEY}`,
            {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            }
        );

        const responseData = await response.json();

        console.log(responseData);
        if (!response.ok) {
            const error = new Error(
                responseData.error.message ||
                    "Failed to authenticate. Check your login data."
            );
            throw error;
        }

        context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
};
