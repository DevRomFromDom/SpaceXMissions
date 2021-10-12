import React from "react";
import { IMission } from "../../types";
import Mission from "./Mission";
import styles from "./Missions.module.scss";

interface ILaunches {
    launches: IMission[];
}

const Missions: React.FC<ILaunches> = (data) => {
    const launches: ILaunches["launches"] = data.launches.flat();
    return (
        <div className={styles.missions__wrapper}>
            {launches.map((el) => {
                return <Mission mission={el} key={el.id} />;
            })}
        </div>
    );
};

export default Missions;
