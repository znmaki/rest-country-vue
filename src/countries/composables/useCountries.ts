import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useCountryStore } from "@/store/countries";
import { storeToRefs } from "pinia";

import clientsApi from "@/api/country-api";
import type { Country } from "../interfaces/country";

const getCountries = async () => {
    const { data } = await clientsApi.get<Country[]>('/all');
    return data;
}

const useCountries = () => {
    const store = useCountryStore();
    const { countries } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['countries'],
        () => getCountries(),
        {
            refetchOnWindowFocus: false,
        }
    );

    watch(data, countries => {
        if (countries) {
            store.setCountries(countries)
        }
    }, { immediate: true });

    return {
        //Properties
        countries,
        isLoading,
        //Methods

        //Getters

        //Mutations
    }
}

export default useCountries;
