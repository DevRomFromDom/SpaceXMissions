import { takeEvery, put, call, SagaReturnType } from "redux-saga/effects";
import { getSpaceMissions } from "./api";
import { setMissions } from "../actions";

type SpaceMissions = SagaReturnType<typeof getSpaceMissions>;

export function* fetchSpaceMissionsSaga() {
    try {
        const res: SpaceMissions = yield call(getSpaceMissions);
        yield put(setMissions(res));
    } catch (e: any) {
        throw new Error(e);
    }
}

export function* rootSaga() {
    yield takeEvery("GET_MISSIONS", fetchSpaceMissionsSaga);
}

export default rootSaga;
