<template>
    <router-link :to="nav.route" class="mdc-list-item" :class="{'mdc-list-item--activated':isSelected}">
            <template v-for="dropdown in dropDowns">
              <template v-if="dropdown.dropDownFor == nav.id">
                <div class="mdc-list-item__content" :key="dropdown.id">
                  <div class="mdc-list-item__text__content">
                    <span class="mdc-list-item__text">{{ nav.text }}</span>
                    <span class="mdc-list-item__meta material-icons dropdown_icon" aria-hidden="true">keyboard_arrow_down <!-- keyboard_arrow_up --></span>
                  </div>
                  <div class="mdc-menu__dropdown">
                    <ul class="mdc-list">
                      <template v-for="dropdownitem in dropdown.dropDownItems">
                        <router-link :to="dropdownitem.route" :key="dropdownitem.id">
                          <li class="mdc-list-item mdc-ripple-upgraded" :class="{'mdc-list-item--activated':(dropdownitem.route ==  $route.path)}" tabindex="-1">
                          <!-- <span class="mdc-list-item__graphic material-icons" aria-hidden="true">inbox</span> -->
                            {{dropdownitem.text}}
                          </li>
                        </router-link>
                      </template>
                    </ul>
                  </div>
                </div>
              </template>
              <template v-else>
                <span class="mdc-list-item__text" :key="dropdown.id">{{ nav.text }}</span>
              </template>
            </template>
    </router-link>
</template>

<script>
// import NavDrawerItemDropdown from "./NavDrawerItemDropdown.vue";

export default {
  // components: {
  //   NavDrawerItemDropdown
  // },
  // data() {
  //   return {
  //     // dropdownItems : navdropdowns.dropDownItems
  //   }
  // },
  props: {
    isSelected: Boolean,
    nav: {
      type: Object,
      required: true
    },
    dropDowns: {
      type: Array,
      required: true
    }
  }
};
</script>

