<script setup lang="ts">
import type { Country } from "../interfaces/country";

interface Props {
  countries: Country[];
}

const props = defineProps<Props>();

</script>

<template>
  <div
    v-for="country of props.countries"
    :key="country.cca2"
    class="max-w-[300px] min-h-[340px] m-auto mb-[5rem] shadow-custze hover:cursor-pointer dark:bg-[#2b3945]"
  >
    <RouterLink
      :to="{
        name: 'country-cca2',
        params: { cca2: country.cca2 },
      }"
    >
      <div>
        <img
          :src="country.flags.svg"
          :alt="country.name.common"
          class="object-cover w-[350px] h-[200px]"
        />
        <div className="mt-4 ml-6 mr-6">
          <h2 className="mb-2 text-[1.3rem] font-bold line-clamp-1">
            {{ country.name.common }}
          </h2>
          <p className="font-semibold">
            Population:
            <span className="font-light">{{
              country.population.toLocaleString("en-US")
            }}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-light">{{ country.region }}</span>
          </p>
          <p className="font-semibold">
            Capital:
            <span className="font-light">{{
              country.capital?.[0] || "N/A"
            }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
