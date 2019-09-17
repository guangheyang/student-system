<template>
     <div class="add-student content" id="add-student">
                <form action="#" id="add-student-form"  class="add-student-form">
                    <div>
                        <label for="name">姓名</label>
                        <input type="text" name="name" autocomplete="off" v-model="user.name">
                    </div>
                    <div class="sex">
                        <label for="sex">性别</label>
                        <input type="radio" name="sex"  value="0" v-model="user.sex">
                        <span>男</span>
                        <input type="radio" name="sex" value="1" v-model="user.sex"><span>女</span>
                    </div>
                    <div>
                        <label for="sNo">学号</label>
                        <input type="text" id="sNo" name="sNo" v-model="user.sNo">
                    </div>
                    <div>
                        <label for="email">邮箱</label>
                        <input type="text" id="email" name="email" v-model="user.email">
                    </div>
                    <div>
                        <label for="birth">出生年</label>
                        <input type="text" id="birth" name="birth" v-model="user.birth">
                    </div>
                    <div>
                        <label for="phone">手机号</label>
                        <input type="text" id="phone" name="phone" v-model="user.phone">
                    </div>
                    <div>
                        <label for="address">住址</label>
                        <input type="text" id="address" name="address" v-model="user.address">
                    </div>
                    <div>
                        <label for=""></label>
                        <input type="button" value="提交" class="btn" id="add-submit" @click="submit">
                        <input type="button" value="重置" class="btn" @click="reset">
                    </div>
                </form>
            </div>
</template>

<script>
import api from '../api.js'
export default {
    data() {
        return {
            user: {
                sex: 0,
                name: '',
                birth: '',
                phone: '',
                address: '',
                sNo: '',
                email: ''
            }
        }
    },
    methods: {
        submit() {
            api.addStu(this.user).then(data => {
                if(data.data.status == 'success') {
                    this.$toast({
                        msg: data.data.msg,
                        type: 'success'
                    })
                    this.$store.dispatch('getStuList', 1).then(() => {
                        this.$router.push('/stu_list')
                        this.reset()
                    })

                } else {
                   this.$toast({
                        msg: data.data.msg,
                        type: 'fail'
                    }) 
                }
            })
        },
        reset() {
            this.user = {
                sex: 0,
                name: '',
                birth: '',
                phone: '',
                address: '',
                sNo: '',
                email: ''
            }
        }
    }
}
</script>
