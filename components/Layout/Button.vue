<template>
    <div class="btn-container">
        <button class="btn">
            <slot />
        </button>
    </div>
</template>

<style scoped>

    .btn-container {
        padding: 0.35rem;
    }

    .btn {
        color: white;
        font-size: 1.1em;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        padding-left: 0.45rem;
        padding-right: 0.45rem;
        letter-spacing: .08em;
        background-color: #03071ec9;
        color: #fcfbf9;
        display: inline-block;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        -ms-transition: all 0.3s;
        transition: all 0.3s;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        line-height: 1.5;
        border-radius: 0.55rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    button {
        border: none;
        outline: none;
    }

    button, html input[type="button"], input[type="reset"], input[type="submit"] {
        -webkit-appearance: button;
        cursor: pointer;
    }

    button {
        overflow: visible;
    }
</style>
