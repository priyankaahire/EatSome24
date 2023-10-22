import {useRouteError} from "react-router-dom"
//%useRoterError: Given by react to display some more details about the error router
export const ErrorComponent = () => {
    const err = useRouteError()
    return (
        <>
        <h1>Oops!!!!!!!!</h1>
        <h2>Something went wrong!!</h2>
        {/* <h3>{err?.status}: {err?.statusText}</h3> */}
        </>
    )
}