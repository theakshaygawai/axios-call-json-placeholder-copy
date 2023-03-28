import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {UserService} from "../services/UserService";
import Spinner from "../../layout/Spinner";
import ErrorMessage from "../../layout/ErrorMessage";

interface IState{
    loading : boolean;
    users : IUser[];
    errorMessage : string;
}


const UserList:React.FC = () => {

    const [state, setState] = useState<IState>({
        loading : false,
        users : [] as IUser[],
        errorMessage : ""
    });

    /**
     * when the component is fully rendered on DOM
     */
    useEffect(() => {
        setState({...state, loading : true});
        UserService.getAllUsers().then((response) => {
            setState({
                ...state,
                loading : false,
                users : response.data
            });
        }).catch((error) => {
            setState({
                ...state,
                loading : false,
                errorMessage : error.message
            });
        });
    }, [])

    const {loading, users, errorMessage} = state;

    return (
        <>
            {loading && <Spinner/>}


            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">User List</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias aliquam aperiam asperiores dolorem doloremque, eveniet nam, neque nihil non perspiciatis possimus quae, qui reiciendis saepe vitae voluptates voluptatibus?</p>
                    </div>
                </div>
            </div>

            {
                errorMessage && errorMessage.length > 0 ? <ErrorMessage message={errorMessage}/> :
                    <>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col">
                                    <table className="table table-hover text-center table-striped">
                                        <thead>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                            <th>Company</th>
                                            <th>Address</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            users.length > 0 && users.map(user => {
                                                return(
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.website}</td>
                                                        <td>{user.company.name}</td>
                                                        <td>{user.address.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}
export default UserList;
