<template>
    <base-dialog
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
    >
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
    components: {
        CoachForm,
    },
    data() {
        return { error: null };
    },
    methods: {
        saveData(data) {
            this.$store
                .dispatch("coaches/registerCoach", data)
                .then(() => this.$router.replace("/coaches"))
                .catch(
                    (error) =>
                        (this.error = error.message || "Something went wrong!")
                );
        },
        handleError() {
            this.error = null;
        },
    },
};
</script>