console.log("vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data:{
        mail:"",
    },
    methods:{

    },
    created(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{
            console.log(res.data.response);
            this.mail = res.data.response;
            this.mailList.push(this.mail);
        })
    }
});