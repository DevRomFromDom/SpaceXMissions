import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames";
import { useDispatch, connect } from "react-redux";
import { reverseMissions } from "../store";

const Navigation = () => {
    const dispatch = useDispatch();
    const [arrow, setArrow] = useState(true);

    const styledBtn = classNames(styles.nav__change_date_range_button, [
        !arrow ? styles.reverse : "",
    ]);

    const handleReverse = () => {
        dispatch(reverseMissions());
        setArrow(!arrow);
    };

    return (
        <div className={styles.nav__wrapper}>
            <div className={styles.nav_name}>Название миссии</div>
            <div className={styles.nav_date}>
                Дата запуска{" "}
                <button data-testid="btn-test" className={styledBtn} onClick={() => handleReverse()}>
                    &#x27A2;
                </button>
            </div>
            <div className={styles.nav_info}>Информация о миссии </div>
            <div className={styles.nav_img}>Фото</div>
        </div>
    );
};

export default connect(null, { reverseMissions })(Navigation);
