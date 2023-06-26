export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg': true,
            'bg-white border-gray-300 text-black': theme === 'light',
            'bg-gray-700 border-gray-600 text-white': theme === 'dark',
        }">
            <!-- Solo se renderiza en la pagina si existe el slot heading -->
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <!-- Slot con nombre -->
                <slot name="heading" />
            </h2>

            <!-- Slot por defecto -->
            <slot />

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name="footer" />
            </footer>
        </div>
    `,

    props: {
        theme: { type: String, default: 'dark' },
    },
};
