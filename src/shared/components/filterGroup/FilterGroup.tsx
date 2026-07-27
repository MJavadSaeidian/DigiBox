"use client";

import CheckBox from "../checkbox";
import styles from "./FilterGroup.module.scss";

type FilterGroupProps = {
    items: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
};

function FilterGroup({
    items,
    selected,
    onChange,
}: FilterGroupProps) {

    function handleToggle(item: string, checked: boolean) {

        if (checked) {

            onChange([...selected, item]);

        } else {

            onChange(
                selected.filter((value) => value !== item)
            );

        }

    }

    return (

        <div className={styles.group}>

            {items.map((item) => (

                <CheckBox

                    key={item}

                    label={item}

                    checked={selected.includes(item)}

                    onChange={(checked) =>
                        handleToggle(item, checked)
                    }

                />

            ))}

        </div>

    );

}

export default FilterGroup;