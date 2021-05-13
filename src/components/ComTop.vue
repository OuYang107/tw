<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    text-color="red"
    background-color="#545c64"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      @click="clickMenu(item)"
      :index="item.path"
      v-for="item in nochildren"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.lable }}</span>
    </el-menu-item>

    <el-submenu
      :index="item.path + ''"
      v-for="(item, index) in haschildren"
      :key="index"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.lable }}</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item
          :index="subItem.path + ''"
          v-for="(subItem, subIndex) in item.childrens"
          :key="subIndex"
          @click="clickMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          {{ subItem.lable }}</el-menu-item
        >
        <!-- <el-menu-item index="1-2">选项2 </el-menu-item> -->
      </el-menu-item-group>
      <!-- <el-submenu index="subitme.path" v-for="(subitme,subindex) in item.childrens" :key="subindex"> -->
      <!-- <template slot="title">分组一</template> -->
      <!-- <el-menu-item :index="subitme.path" v-for="(subitme,subindex) in item.childrens" :key="subindex">{{subitme.lable}}</el-menu-item> -->
    </el-submenu>
    <!-- </el-submenu> -->

    <!-- ffsdgdfg -->

    <!-- <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  namespaced: true,
  data() {
    return {
      munutop: [
        { path: "/", name: "mian", lable: "大哥" },
        { path: "/home", name: "home", lable: "首页", icon: "platform-eleme" },
        { path: "/about", name: "about", lable: "关于", icon: "s-tools" },
        { path: "/from", name: "from", lable: "表格", icon: "s-tools" },
        {
          path: "/videomange",
          name: "videomange",
          lable: "视频",
          icon: "s-tools"
        },
        {
          path: "/page",
          lable: "页面",
          name: "page",
          icon: "platform-eleme",
          childrens: [
            {
              // path: "/page1",
              lable: "页面1",
              // name: "page1",
              path: "/pageone",
              name: "pageone",
              icon: "s-goods"
            },
            {
              // path: "/page2",
              lable: "页面2",
              // name: "page2",
              path: "/pagethree",
              name: "pagethree",
              icon: "star-off"
            }
          ]
        },
        {
          path: "/indexs",
          lable: "其他",
          name: "indexs",
          icon: "platform-eleme",
          childrens: [
            {
              // path: "/index1",
              lable: "其他1",
              // name: "index1",
              icon: "s-goods",
              path: "/videoMange",
              name: "videoMange"
            },
            {
              // path: "/index2",
              lable: "其他2",
              // name: "index2",
              icon: "star-off",
              path: "/othertwo",
              name: "othertwo"
            },
            {
              // path: "/index3",
              lable: "其他3",
              // name: "index3",
              icon: "star-off",
              path: "/otherthree",
              name: "otherthree"
            }
          ]
        }
      ]
    };
  },
  computed: {
    nochildren() {
      return this.munutop.filter(itme => !itme.childrens);
    },
    haschildren() {
      return this.munutop.filter(itme => itme.childrens);
    }
  },
  methods: {
    clickMenu(itme) {
      this.$router.push({ path: itme.path });
      this.$store.commit("selectMenu", itme);
      //点击侧边栏触发clickMenu 先跳转路由 再改面包屑导航 （selectMenu是vueX的mutations方法）
      // console.log(itme.name);
      // console.log(currenMenu);
      // console.log(itme);
      // console.log(itme.path);
    }
    // display() {
    //   let list = this.munutop;
    //   for (let i in list) {
    // console.log(list[i].name);
    // }
    // }
  }
};
</script>

<style>
.el-menu-vertical-demo {
  height: 100vh;
  border: none;
}
</style>
