<script setup lang="ts">
import useCountries from "../composables/useCountries";
import CountryList from "../components/CountryList.vue";
import FormSearch from "../components/FormSearch.vue";
import { ref, watch } from "vue";
import type { Country } from '../interfaces/country';

const { countries } = useCountries();

const arrFilters = ref<Country[]>(countries.value) //copia de la data para hacer reactivo los filtrados - se coloca el value para que sea una instancia aparte
const inputCountry = ref<string>('') //valor del input del nombre del pais para filtrar
const typeRegion = ref<string>('') //valor del select al momento de filtrar la region

//Observar cuando varia la variable
watch([inputCountry, countries], () => {
  updateFilter();
});

//Filtrado de Paises
const setCountryFilter = (e: Event) => {
  inputCountry.value = (e.target as HTMLSelectElement).value
}
const updateFilter = () => {  
  arrFilters.value = countries.value.filter(((country: { name: { common: string; }; }) => country.name.common.toLowerCase().includes(inputCountry.value)))
}
const onChange = (e: Event) => {
  arrFilters.value = countries.value.filter((country: { region: string; }) => country.region.toLowerCase().includes((e.target as HTMLSelectElement).value))
}


</script>

<template>
  <div>
    <FormSearch @set-country-filter="setCountryFilter" @on-change="onChange" :typeRegion2="typeRegion" />
  </div>
  <section class="grid grid-flow-row md:grid-cols-2 2xl:grid-cols-4 mt-[3rem]">
    <CountryList :countries="arrFilters" />
  </section>
</template>

<style scoped></style>
