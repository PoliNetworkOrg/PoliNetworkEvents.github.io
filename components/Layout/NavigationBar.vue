<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" :href="'/' + language + '/'">
                <img src="/img/icon.png" style="width:calc(20px + 0.1rem);">
                <span>&nbsp;PoliNetwork</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" :href="'/' + language + '/'">
                            Home 🏠
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
       
	   
                    <li class="nav-item">
                        <a v-if="language == 'it' " class="nav-link" :href="'/' + language + '/contatti/'">Contatti 💬</a>
                        <a v-if="language == 'en' " class="nav-link" :href="'/' + language + '/contatti/'">Contacts 💬</a>
                    </li>
                    <li class="nav-item">
                        <div style="border:1px solid #00000029; margin:auto; border-radius: 10px;">
                            <table style="display: inline;">
                                <tr>
                                    <td>
                                        <a href='/it/'><img src="/img/it.png" style="width:35px;padding:6px;"></a>
                                    </td>
                                    <td>
                                        <a href='/en/'><img src="/img/en.png" style="width:35px;padding:6px;"></a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        language:{
            type:String,

			required:true
        }
    }
}
</script>
