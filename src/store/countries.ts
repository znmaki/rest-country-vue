import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Country } from '@/countries/interfaces/country';

export const useCountryStore = defineStore('country', () => {

    const countries = ref<Country[]>([]);
    const country = ref<Country>();

    return {
        // State properties
        countries,
        country,
        // Getters
        //squareCount: computed(() => count.value * count.value),

        // Actions
        setCountries(newCountries: Country[]) {
            countries.value = newCountries;
        },
        setCountry(newCountry: Country) {
            country.value = newCountry;
        },        
    };
});