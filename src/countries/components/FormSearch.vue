<script setup lang="ts">
import { ref } from "vue";

interface Props {
  typeRegion2: string;
}
interface Emits {
  (e: "setCountryFilter", event: Event): void;
  (e: "onChange", event: Event): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
//evita la mutacion directa
const valueRegion = ref(props.typeRegion2)
</script>

<template>
  <div class="flex flex-wrap items-center justify-between w-[94%] m-auto">
    <div>
      <input
        type="text"
        @input="emits('setCountryFilter', $event)"
        class="pl-[3rem] pr-[12rem] py-3 mt-8 dark:bg-[#2b3945]"
      />
    </div>

    <select
      v-model="valueRegion"
      @change="emits('onChange', $event)"
      class="px-5 py-3 bg-white mt-8 dark:bg-[#2b3945]"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europa</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
</template>

<style scoped></style>
