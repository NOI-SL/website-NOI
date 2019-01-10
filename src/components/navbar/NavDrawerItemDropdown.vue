<template>
    <li class="mdc-list-item mdc-ripple-upgraded" tabindex="-1">
    <!-- <span class="mdc-list-item__graphic material-icons" aria-hidden="true">inbox</span> -->
    Inbox
    </li>
</template>

<script>
export default {
    props: {
        isSelected: Boolean,
        dropdown: {
            type: Object,
            required: true
        }
    }
}
</script>

