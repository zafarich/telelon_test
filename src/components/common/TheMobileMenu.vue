<script setup></script>
<template>
  <div class="mobile-menu-wrap">
    <div class="mobile-menu">
      <q-btn
        :to="{ name: 'index' }"
        stack
        color="deep-orange"
        no-caps
        :ripple="false"
        size="sm"
        flat
      >
        <q-icon outline name="eva-home-outline" size="3em"></q-icon>
        <!-- <div class="menu-text">Home</div> -->
      </q-btn>
      <q-btn
        no-caps
        :ripple="false"
        :to="{ name: 'search-tel' }"
        stack
        color="grey-9"
        size="sm"
        flat
      >
        <q-icon outline name="eva-search" size="3em"></q-icon>
        <!-- <div class="menu-text">Qidirish</div> -->
      </q-btn>
      <q-btn
        no-caps
        :ripple="false"
        :to="{ name: 'add' }"
        stack
        color="info"
        size="sm"
        flat
      >
        <q-icon outline name="eva-plus-circle-outline" size="3em"></q-icon>
        <!-- <div class="menu-text">Sotish</div> -->
      </q-btn>
      <q-btn
        no-caps
        :ripple="false"
        :to="{ name: 'chat' }"
        stack
        color="info"
        size="sm"
        flat
      >
        <q-icon outline name="eva-heart-outline" size="3em"></q-icon>
        <!-- <div class="menu-text">Tanlanganlar</div> -->
      </q-btn>
      <q-btn
        no-caps
        :ripple="false"
        :to="{ name: 'profile' }"
        stack
        color="info"
        size="sm"
        flat
      >
        <q-icon outline name="eva-person-outline" size="3em"></q-icon>
        <!-- <div class="menu-text">Profil</div> -->
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu-wrap {
  margin: 0px -12px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: $white;
  border-top: 1px solid $grey-3;
  width: calc(100% + 24px);
}
.mobile-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .q-btn-item {
    width: 20%;
    padding: 10px 0px !important;

    .menu-text {
      letter-spacing: 0.5px !important;
      font-size: 13px;
      font-weight: 400;
    }
  }
}
</style>
