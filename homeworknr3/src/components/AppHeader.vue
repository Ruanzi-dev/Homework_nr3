<template>
<header class="header">
    <nav class="nav">
        <ul class="header-content">
        <li><router-link to="/signup">Signup</router-link></li>
        <li><router-link to="/home">Posts</router-link></li>
        </ul>
    </nav>
</header>
</template>

<script>
export default{
    name: "AppHeader"
};
</script>