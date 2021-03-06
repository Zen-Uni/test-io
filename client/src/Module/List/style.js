import styled from "@emotion/styled";


export const ListWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 280px;
    /* background-color: rgba(60,179,113, 0.8); */
    background-color: rgba(95,158,160, .8);

`

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    /* background-color: yellow; */

    & #search-input {
        height: 40px;
        width: 80%;
        position: absolute;
        top: 15px;
        left: 10%;
        border: none;
        outline: none;
        overflow: hidden;
        padding-left: 10px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, .5);
        transition: all .3s ease;
        &:focus {
            background-color: rgba(255, 255, 255, .8);
        }
    }
`

export const ResBoxWrapper = styled.div`
    position: absolute;
    width: 90%;
    height: 60px;
    background-color: rgba(255, 255, 255, .8);
    top: 60px;
    left: 5%;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    & .no-user {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    z-index: 1000;
`

export const ResWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    /* background-color: yellow; */

    & .avatar {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        position: absolute;
        top: 5px;
        left: 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    & .username {
        position: absolute;
        left: 70px;
        height: 50px;
        width: 100px;
        overflow: hidden;
        top: 5px;
        display: flex;
        align-items: center;
        color: black;
        font-size: 20px;
        font-weight: 200;
    }

    & #add-friend {
        height: 40px;
        position: absolute;
        right: 5px;
        width: 40px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 200;
        text-align: center;
        line-height: 40px;
        top: 10px;
        cursor: pointer;
        transition: all .3s ease;
        &:hover {
            background-color: rgba(255, 255, 255, 1);
            font-size: 25px;
        }
    }
`

export const FriendListBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    /* background-color: black; */

    & .list-item {
        position: relative;
        height: 60px;
        width: 100%;
        transition: all .3s ease;
        /* background-color: black; */
        &:hover {
            background-color: rgba(95,158,160, 1);
            cursor: pointer;
        }

        &.item-active {
            background-color: rgba(95,158,160, 1);
        }

        & .item-avatar {
            position: absolute;
            height: 50px;
            width: 50px;
            /* background-color: yellow; */
            border-radius: 50px;
            top: 5px;
            left: 10px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        & .item-text {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 70px;
            /* background-color: pink; */
        }

        & .item-username {
            height: 100%;
            width: 100%;
            line-height: 60px;
            font-size: 18px;
            font-weight: 300;
        }
    }
`