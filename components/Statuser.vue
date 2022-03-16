<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText">
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search..."
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.status="{ item }">
        <v-switch
          v-model="item.status"
          color="#B5D744"
          inset
          :label="status"
        ></v-switch>
      </template>
      <template v-slot:item.function="{ item }">
        <div class="function-con">
            <div class="function-box t2">
              <div class="icon">
                <i class="las la-eye"></i>
              </div>
              <div class="text">
                View Detail
              </div>
            </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
    data () {
      return {
        users: [
          {
            id: 'XXX0011',
            no: 1,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 2,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 3,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 4,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: false,
          },
          {
            id: 'XXX0011',
            no: 5,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 6,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: false,
          },
          {
            id: 'XXX0011',
            no: 7,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 8,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 9,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 10,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 11,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
          {
            id: 'XXX0011',
            no: 12,
            username: '#username',
            type: 'Something Wrong',
            quota: 1,
            maxquota: 3,
            comment: Math.floor(Math.random() * 20),
            postdate: '15 Jan 2020, 13:12',
            status: true,
          },
        ],
        headers: [
          { text: 'No', align: 'start', value: 'no' },
          { text: 'Username', value: 'username' },
          { text: 'Type', value: 'type' },
          { text: 'Quota Used', value: 'quota' },
          { text: 'Max Quota', value: 'maxquota' },
          { text: 'function', value: 'function' },
        ],
      }
    },
    methods: {
      viewRoute(link) {
        this.$router.push({
          path: link
        });
      },
      redirectTo(path) {
        this.$router.replace({ path });
      }
    }
}
</script>
<style lang="scss" scoped>
.function-con {
  .function-box {
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    background-color: $primary;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 5px;
    .icon {
      display: inline-block;
      vertical-align: middle;
    }
    .text {
      display: inline-block;
      font-size: 0.6rem;
      vertical-align: middle;
    }
    &:hover {
      background-color: $primary;
      opacity: 0.5;
      color: #fff;
    }
  }
}
</style>
