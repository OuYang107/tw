<template>
  <div class="box">
    <form action="">
      <div class="top content foot">
        已买座位
        <ul>
          <li
            v-for="(item, index) in lists.filter(item => item.flagtyep)"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="content">
        可选座位
        <ul>
          <li
            :class="item.flagtyep ? 'text-danger' : ''"
            v-for="(item, index) in lists"
            :key="index"
            @click="add(index)"
            flag="flagtyep"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="foot">
        用户信息
        <ul>
          <li
            v-for="(item, index) in lists.filter(item => item.flagtyep)"
            :key="index"
          >
            {{ item.name }}
            <br />
            用户名：<input
              type="text"
              placeholder="请输入用户名"
              v-model="item.user"
            />
            密码：<input
              type="password"
              placeholder="请输入密码"
              v-model="item.passwork"
            />
          </li>
        </ul>
      </div>
      <button @click="Puser">提交</button>
    </form>
  </div>
</template>

<script>
// import { filter } from 'vue/types/umd';
export default {
  data() {
    return {
      lists: [
        {
          satr: 11,
          name: "11座12号",
          user: "5258",
          passwork: "",
          flagtyep: false
        },
        {
          satr: 12,
          name: "12座12号",
          user: "",
          passwork: "",
          flagtyep: false
        },
        {
          satr: 13,
          name: "13座12号",
          user: "",
          passwork: "",
          flagtyep: false
        },
        {
          satr: 14,
          name: "14座12号",
          user: "",
          passwork: "",
          flagtyep: false
        }
      ],
      isActive: false,
      hasError: true
      //   user: "",
      //   passwork: ""
    };
  },
  methods: {
    add(index) {
      // console.log(index);
      //    console.log(this.lists[index].flagtyep)
      this.$set(this.lists[index], "flagtyep", !this.lists[index].flagtyep);
    },
    Puser() {
      // eslint-disable-next-line no-console
      //   console.log(this.lists);
      //   let arrs = [];
      let par = this.lists.filter(item => item.flagtyep);
      for (let i in par) {
        // console.log(par[i].satr);
        if (par[i].user == "" || par[i].passwork == "") {
          alert(par[i].name + "或" + par[i].passwork + "未填写");
          return false;
        } else if (par[i].passwork.length < 6) {
          alert("密码不可小于6位数");
          return false;
        }
      }
      alert("已提交");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  /* box-sizing: content-box; */
  display: flex;
  /* justify-self: unset; */
  /* justify-content: center;
    align-items: center; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
}
form {
  box-sizing: content-box;
  padding: 20px;
  margin: 10px;
  position: relative;
  height: 400px;
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
}
.top {
  margin-bottom: 10px;
}
.content ul,
.top ul {
  display: flex;
}
/* .foot ul li, */
.content ul li,
.top ul li {
  /* flex: 1; */
  list-style: none;
  /* height: 25px;
    width: 50px; */
  border: 1px solid darkkhaki;
  border-radius: 5px;
  display: inline-block;
  margin: 10px;
  padding: 7px;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
}
.foot ul li {
  list-style: none;
}
.foot ul li input {
  width: 140px;
  height: 25px;
  border-radius: 3px;
}
button {
  position: absolute;
  right: 5%;
  bottom: 5%;
  height: 30px;
  width: 70px;
  border-radius: 2px;
  background: chartreuse;
}
.text-danger {
  box-shadow: 0 0 5px black;
}
</style>
