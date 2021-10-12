import React, { useEffect } from "react";
import Missions from "./Missions";
import Navigation from "./Navigation";
import styles from "./App.module.scss";
import {useDispatch, useSelector } from "react-redux";
import { getMissions } from "./store";
import { IMission } from "../types";

interface IState {
    missions: IMission[];
}

const App = () => {
    const missions = useSelector((state: IState) => state.missions);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMissions());
    }, []);

    return (
        <div className={styles.app__container}>
            <div className={styles.title}>Успешные космические миссии SpaceX за 2015-2019 года </div>
            {missions.length === 0 ? (
                <div className={styles.loading}>Loading!!!</div>
            ) : (
                <>
                    <Navigation /> <Missions launches={missions} />
                </>
            )}
        </div>
    );
};

export default App;
