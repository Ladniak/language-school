import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "../../../utils/customSelect";

import Select from "react-select";

import module from "./FilterMenu.module.css";

const FilterMenu = () => {
    const { control, watch } = useForm({
        defaultValues: {
            language: { label: "French", value: "French" },
            level: { label: "A1 Beginner", value: "beginner" },
            price: { label: "30 $", value: "30" },
        }
    });

    const selectedValues = watch();

    useEffect(() => {
        console.log({
            language: selectedValues.language?.value,
            level: selectedValues.level?.value,
            price: selectedValues.price?.value,
        });
    }, [selectedValues]);

    const languageOptions = [
        { label: "French", value: "French" },
        { label: "English", value: "English" },
        { label: "German", value: "German" },
        { label: "Ukrainian", value: "Ukrainian" },
        { label: "Polish", value: "Polish" },
    ];

    const levelOptions = [
        { label: "A1 Beginner", value: "beginner" },
        { label: "A2 Elementary", value: "elementary" },
        { label: "B1 Intermediate", value: "intermediate" },
        { label: "B2 Upper-Intermediate", value: "upper-intermediate" },
    ];

    const priceOptions = [
        { label: "10 $", value: "10" },
        { label: "20 $", value: "20" },
        { label: "30 $", value: "30" },
        { label: "40 $", value: "40" },
    ];

    return (
        <form className={module.container}>
            <label className={module.label}>
                Languages
                <Controller
                    name="language"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={languageOptions}
                            styles={customStyles}
                            isSearchable={false}
                        />
                    )}
                />
            </label>

            <label className={module.label}>
                Level of knowledge
                <Controller
                    name="level"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={levelOptions}
                            styles={customStyles}
                            isSearchable={false}
                        />
                    )}
                />
            </label>

            <label className={module.label}>
                Price
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={priceOptions}
                            styles={customStyles}
                            isSearchable={false}
                        />
                    )}
                />
            </label>
        </form>
    );
};

export default FilterMenu;
