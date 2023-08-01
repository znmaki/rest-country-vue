<script setup lang="ts">
import { useRoute } from "vue-router";
import useCountry from "@/countries/composables/useCountry";

const route = useRoute();
const { cca2 } = route.params as { cca2: string };

const { isLoading, country } = useCountry(cca2);
</script>

<template>
    <div className="w-[94%] mx-auto my-10">
        <RouterLink :to="{ name: 'countries' }"
            class="dark:bg-[#2b3945] shadow-custze-2 border border-[#10141785] px-8 py-3">
            ← Back
        </RouterLink>
    </div>
    <h1 v-if="isLoading">Loading...</h1>
    <template v-else-if="country">
        <section
            class="max-w-[70%] grid place-content-between m-auto grid-flow-row justify-center 2xl:justify-between 2xl:grid-flow-col items-center">
            <!-- IMAGEN -->
            <div class="max-w-[500px] max-h-[300px] leading-[0px]">
                <img class="w-[500px] h-[300px] object-cover" :src="country.flags.svg" :alt="country.name.common">
            </div>
            <!-- INFO -->
            <div>
                <h2>{{ country.name.common }}</h2>

                <div>
                    <p>Native Name: <code>{{ Object.values(country.name?.nativeName || {})?.[0].official || 'None' }}</code>
                    </p>
                    <p>Population: <span>{{ country.population ? country.population.toLocaleString('en-US') : 'None' }}</span>
                    </p>
                    <p>Region: <span>{{ country?.region || 'None' }}</span></p>
                    <p>Sub Region: <span>{{ country?.subregion || 'None' }}</span></p>
                    <p>Capital: <span>{{ country?.capital?.[0] || 'None' }}</span></p>
                    <p className='mt-5 sm:mt-0 2xl:mt-0'>Top Level Domain: <span>{{ country?.tld?.[0] || 'None' }}</span></p>
                    <p>Currencies: <span>{{ Object.values(country?.currencies || {})?.[0].name || 'None' }}</span></p>
                    <p>Languages: <span>{{ country.languages ? Object.values(country.languages).join(', ') : 'None' }}</span>
                    </p>
                </div>
            </div>
        </section>
    </template>
</template>

<style scoped></style>
