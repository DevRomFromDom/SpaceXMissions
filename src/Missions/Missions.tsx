import React from "react";
import { IMission } from "../../types";
import Mission from "./Mission";
import styles from "./Missions.module.scss";


interface ILaunches {
    launches: IMission[];
}


const Missions = (data: ILaunches): JSX.Element => {
    const launches: ILaunches["launches"] = data.launches.flat();
    return (
        <div className={styles.missions__wrapper}>
            {launches.map((el, index) => {
                return <Mission mission={{ ...el, index }} key={index} />;
            })}
        </div>
    );
};

export default Missions;
