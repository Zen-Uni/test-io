/**
 * @description nav bar component and styles
 */

import { useEffect } from "react";
import { connect } from "react-redux";
import { NavWrapepr } from "./style";
import { avatarRoot } from '../../fetch'
import { handlePostImg } from "../../utils/postImg";
import { updateAvatarAction } from "../../store/action";
import { removeToken } from "../../localStorage";


function Nav(props) {
    const { userAvatar, updateAvatar } = props;
    useEffect(() => {
        console.log(avatarRoot + userAvatar)
    })
    // useEffect(() => {
    //     const avatarDom = document.getElementById("id")
    //     avatarDom.style.backgroundImage = `url(${avatarRoot} + ${userAvatar})`
    // })  

    const handleRemoveToken = () => {
        removeToken();
        window.location.href = "/"
    }

    return (
        <NavWrapepr>
            <div id="avatar" style={{
                backgroundImage: `url(${avatarRoot+userAvatar})`
            }}>
                <input type="file" onChange={(e) => handlePostImg(e, updateAvatar)}/>
            </div>

            <div id="logout" onClick={handleRemoveToken}>
                <i className="iconfont icon-Logout"></i>
            </div>
        </NavWrapepr>
    )
}

const stateToProps = state => {
    return {
        userAvatar: state.avatar
    }
}

const stateToDispatch = dispatch => {
    return {
        updateAvatar(data) {
            const action = updateAvatarAction(data);
            dispatch(action);
        }
    }
}

export default connect(stateToProps, stateToDispatch)(Nav);