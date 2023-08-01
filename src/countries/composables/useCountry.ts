import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useCountryStore } from "@/store/countries";
import { storeToRefs } from "pinia";

import clientsApi from "@/api/country-api";
import type { Country } from "../interfaces/country";

const getCountry = async (cc2: string) => {

    const { data } = await clientsApi.get<Country[]>(`/alpha/${cc2}`);
    return data[0];
}

const useCountry = (cc2: string) => {
    const store = useCountryStore();
    const { country } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['country', cc2],
        () => getCountry(cc2),
        {

        }
    );

    watch(data, country => {
        if (country)
            store.setCountry(country);
    }, { immediate: true });

    return {
        //Properties
        country,
        isLoading,

        //Methods

        //Getters
    }
}

export default useCountry;
