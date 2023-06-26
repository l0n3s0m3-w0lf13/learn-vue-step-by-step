export default {
    template: `
        <div class="flex gap-2">
            <!-- @click="$emit('change', tag)" -->
            <button
                @click="$emit('update:modelValue', tag)"
            	v-for="tag in tags"
            	class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === modelValue
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        // currentTag: String
        modelValue: String, // default prop name cuando se usa v-model (desde componente padre)
    },

    computed: {
        tags() {
            // Por cada assigment devuelve tus tags
            // Set obliga a que cada item sea unico (no duplicados)
            return ['all', ...new Set(this.initialTags)];
        },
    },
};
