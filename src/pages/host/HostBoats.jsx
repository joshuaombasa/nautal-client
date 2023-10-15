import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getHostBoats } from "../../api";
import HostBoatItem from "../../components/HostBoatItem";
import { authRequired } from "../../utils";

export async function loader({ request }) {
    await authRequired(request)
    const hostBoatsPromise = getHostBoats()
    return defer({ hostBoats: hostBoatsPromise })
}

export default function HostBoats() {
    const dataPromise = useLoaderData()



    function rendeHostBoats(hostBoats) {

        const hostBoatElements = hostBoats.map(boat => (
            <HostBoatItem key={boat.id} boat={boat} />
        ))

        return (
            <div className="host--boats-container">
                <h1>Your listed boats</h1>
                {hostBoatElements}
            </div>
        )
    }

    return (
        <div className="host--boats--page">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.hostBoats}>
                    {rendeHostBoats}
                </Await>
            </Suspense>
        </div>
    )
}