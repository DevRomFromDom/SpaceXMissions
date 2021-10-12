import React, { useEffect } from "react";
import Missions from "./Missions";
import Navigation from "./Navigation";
import styles from "./App.module.scss";
import { connect, useDispatch } from "react-redux";
import { getMissions } from "./store";
import { IMission } from "../types";

interface IStateProps {
    missions: IMission[];
}

const App = (prop: { missions: IMission[] }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMissions());
    }, []);

    return (
        <div className={styles.app__container}>
            <div className={styles.title}>Успешные космические миссии SpaceX за 2015-2019 года </div>
            {prop.missions.length === 0 ? (
                <div className={styles.loading}>Loading!!!</div>
            ) : (
                <>
                    <Navigation /> <Missions launches={prop.missions} />
                </>
            )}
        </div>
    );
};

export default connect(
    (state: IStateProps) => ({
        missions: state.missions,
    }),
    { getMissions }
)(App);
