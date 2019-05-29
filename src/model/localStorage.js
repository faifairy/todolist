// 封装localStroage本地存储的方法
var storage={
    set(k,val){
        localStorage.setItem(k,JSON.stringify(val));
    },
    get(k){
        return JSON.parse(localStorage.getItem(k));
    },
    remove(k) {
        localStorage.removeItem(k);
    }
}


export default storage;