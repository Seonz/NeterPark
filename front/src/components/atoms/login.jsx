import { atom } from "recoil";


export const Userinfo = atom({
    key: "userinfo",
    default: {
        userId: "",
        userPwd: ""
    },
});



export const Joininfo = atom({
    key: "joininfo",
    default: {
        userId: "",
        userPwd: "",
        userName: "",
        userEmail:"",
        userPhoneF:"",
        userPhoneM:"",
        userPhoneL:"",
        userAddr:""
    },
});