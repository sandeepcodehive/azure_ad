import React, { useEffect, useState } from "react";
import { callMsGraph } from "./opengraph";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function ProfileData() {
    const { instance, accounts } = useMsal();

    const [userdata, setuserdata] = useState(null);

    useEffect(() => {
        async function fetchProfileData() {
            instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                callMsGraph(response.accessToken).then((response) => setuserdata(response));
            });
            // try {
            //     const response = await callMsGraph(accessToken);
            //     setuserdata(response);
            // } catch (error) {
            //     console.log("Not able to fetch", error);
            // }
        }
        fetchProfileData();
    }, []);

    return (
        <div id="profile-div">
            {
                userdata ?
                    <>
                        <p>
                            <strong>First Name: </strong> {userdata.givenName}
                        </p>
                        <p>
                            <strong>Last Name: </strong> {userdata.surname}
                        </p>
                        <p>
                            <strong>Email: </strong> {userdata.userPrincipalName}
                        </p>
                        <p>
                            <strong>Id: </strong> {userdata.id}
                        </p>
                    </>
                    : <>
                        <p>Loading...</p>
                    </>
            }
        </div>
    );
};

export default ProfileData;