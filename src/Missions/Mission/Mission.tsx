import React, { useEffect, useState } from "react";
import styles from "./Mission.module.scss";
import { IMission } from "../../../types";
import { getRocketImage } from "../../store/sagas/api";

const stringDate = (date: Date) => {
    const day = date.getDate().toString();
    const month = (date.getUTCMonth() + 1).toString();
    const dateString = `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${date.getFullYear()}`;
    return dateString;
};

export const Mission = (prop: { mission: IMission }) => {
    const { mission } = prop;
    const date = stringDate(new Date(mission.date_utc));

    const [img, setImg] = useState(mission.links.flickr.original[0]);

    const getImage = async () => {
        const arrayOfImages = await getRocketImage(mission.rocket);
        setImg(arrayOfImages[0]);
        return;
    };

    useEffect(() => {
        if (!img) {
            getImage();
        }
    }, [img]);

    useEffect(() => {
        if (typeof img !== "undefined" && img !== mission.links.flickr.original[0]) {
            setImg(mission.links.flickr.original[0]);
        }
    }, [mission]);

    return (
        <div className={styles.mission__wrapper} key={mission.id}>
            <div className={styles.mission__name}>{mission.name}</div>
            <div className={styles.mission__date}>{date}</div>
            <div className={styles.mission__info}>{mission.details || "Информация о миссии отсутствует"}</div>
            <div className={styles.rocket__img_wrapper}>
                {img ? (
                    <img
                        src={`${img}`}
                        className={styles.img}
                        width='100px'
                        height='100px'
                        alt='Фото отстутствует'
                        data-testid='img-test'
                    ></img>
                ) : null}
            </div>
        </div>
    );
};

export default Mission;
