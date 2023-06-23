export default {
  template: `
        <button
        	:disabled="processing"
        	@click="toggle"
        	:class="{
                'border rounded px-5 py-2 m-2 disabled:cursor-not-allowed': true,
                'bg-violet-200 hover:bg-violet-400': type === 'primary',
                'bg-pink-200 hover:bg-pink-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'is-loading': processing
            }"
        >
            <slot />
        </button>
    `,

    props: {
        // Nombre del prop
        type: {
            // Declarar tipo y valor por defecto
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
};
