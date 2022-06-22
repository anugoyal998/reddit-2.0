const { atom } = require("recoil");

const fetchPostsAtom = atom({
    key: 'fetchPostAtom',
    default: false,
})

export default fetchPostsAtom