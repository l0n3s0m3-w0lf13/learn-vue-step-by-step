import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <!-- Modo 1: Comunicacion mediante props -->
            <!-- <assignment-create :assignments="assignments"></assignment-create> -->

            <!-- Modo 2: Recibir evento del componente hijo @nombre-evento="nombre-método" -->
            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1, tag: 'math' },
                { name: 'Read Chapter 4', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in Homework', complete: false, id: 3, tag: 'math' },
            ],
        };
    },

    computed: {
        // inProgress() {
        //     return this.assignments.filter((assignment) => !assignment.complete);
        // },
        // completed() {
        //     return this.assignments.filter((assignment) => assignment.complete);
        // },

        filters() {
            return {
                inProgress: this.assignments.filter(
                    (assignment) => !assignment.complete
                ),
                completed: this.assignments.filter(
                    (assignment) => assignment.complete
                ),
            };
        },
    },

    methods: {
        // Evento del componente hijo
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            });
        },
    },
};
