<template>
    <button type="button" :disabled="disabled" v-on:click="handleClick">
        {{ label }}
    </button>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: 'Load data'
        },
    },
    methods: {
        handleClick(evt) {
            /*
                Emit a custom event to hide the internal process. This way, you can easily
                encapsulate additional functionality (e.g. logging, event sourcing).
            */
            evt.stopImmediatePropagation();

            this.$emit('wl-click', evt);
        }
    }
}
</script>
