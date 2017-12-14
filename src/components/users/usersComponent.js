import React from "react";
import PropTypes from "prop-types";

const UsersComponent = (props) => {
    const { name, aboutShort, lastPostDate, avatarUrl } = props.user;

    const date = new Date(lastPostDate);
    const time = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString();


    if (!avatarUrl) {
        return (
            <div className="userContainer">
                <div className="row">
                    <div className="col-4 userImage">
                        <img style={{borderRadius: "50%" }} src="https://via.placeholder.com/200x200" alt="avatar"/>
                    </div>
                    <div className="col-4 name">
                        <h3>{name}</h3>
                        <p>{aboutShort}</p>
                    </div>
                    <div className="col-4 time">
                        <p>Last post at: <br /> {time} <br/> {dateString} </p>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="userContainer">
            <div className="row">
                <div className="col-4 userImage">
                    <img style={{borderRadius: "50%" }} src={avatarUrl} alt="avatar" />
                </div>
                <div className="col-4 name">
                    <h3>{name}</h3>
                    <p>{aboutShort}</p>
                </div>
                <div className="col-4 time">
                    <p>Last post at: <br /> {time} <br/> {dateString} </p>
                </div>

            </div>
        </div>
    );

};

UsersComponent.propTypes = {
    user: PropTypes.object,
};

export default UsersComponent;