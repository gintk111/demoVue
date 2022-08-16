<template>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Login</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-7 col-lg-5">
                    <div class="wrap">
                        <div class="img">
                            <img src="../assets/image/bg-1.jpg" style="width: 100%; height: 100%"/>
                        </div>
                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                        <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                    </p>
                                </div>
                            </div>
                            <form action="#" class="signin-form">
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" required v-model="user.username" @input="validateEmail">
                                    <label class="form-control-placeholder" >Username</label>
                                </div>
                                <div class="form-group">
                                    <input id="password-field" type="password" class="form-control" required v-model="user.password">
                                    <label class="form-control-placeholder" >Password</label>
                                    <a><span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click="changeType"></span></a>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3" v-if="btLoginDisable" disabled>Sign In</button>
                                    <button v-else type="submit" class="form-control btn btn-primary rounded submit px-3" @click="login()" >Sign In</button>
                                </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{ overlay_setting: isLoading }">
            <i :class="{ loading_setting: isLoading }"></i>
        </div>
    </section>
</template>

<script>
    import utils from "../utils";
    import uService from "../service/UserService";
    export default {
        name: 'LoginComponent',
        data: function () {
            return {
                user: {
                    username: "",
                    password: ""
                },
                btLoginDisable: true,
                isLoading: false
            }
        },
        methods: {
            changeType() {
                if (document.getElementById("password-field").type === "text") {
                    document.getElementById("password-field").type = "password";
                } else {
                    document.getElementById("password-field").type = "text";
                }
            },
            validateEmail() {
                let notNullUserName = this.user.username !== "" && this.user.username.trim().length > 0;
                const vm = utils.vEMail(this.user.username) && notNullUserName;
                this.btLoginDisable = !vm;
            },
            async login() {
                this.isLoading =  true;
                const j = JSON.parse(JSON.stringify(this.user));
                await uService.logIn(j).then((response) => {
                    console.log(response.status);
                    console.log(response);
                    localStorage.setItem("ACCESS_TOKEN", response.data.output.accessToken);
                    console.log(response.data.output.accessToken)
                });
                this.isLoading =  false;
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/login/style.css";

</style>
