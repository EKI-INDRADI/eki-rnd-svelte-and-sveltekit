<script>
    // export let title = 'My Button';
</script>



<!-- <button>{title}</button> -->
<!-- <button>{children}</button> -->
<button><slot>Fallback</slot></button> 

<style>
    button {
        border : none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
</style>