export default {
    template: `
        <!-- prevenir comportamiento por defecto desde vue: recargar la página con submit -->
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input
                    v-model="newAssignment"
                	class="p-2"
                	placeholder="New assigment..."
                />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    // Modo 1 recibir variable del componente padre
    // props: {
    //     assignments: Array
    // },

    data() {
        return {
            newAssignment: "",
        };
    },

    methods: {
        add() {
            // Modo 1: array del componente padre
            // this.assignments.push({
            //     name: this.newAssignment,
            //     completed: false,
            //     id: this.assignments.length + 1,
            // });

            // Modo 2: Emitir un evento al componente padre
            this.$emit("add", this.newAssignment);

            this.newAssignment = "";
        },
    },
};
