const localEvent=function(item){
    this.get=function(){
        return localStorage.getItem(item)?JSON.parse(localStorage.getItem(item)):""//读取localstorage里的数据
    }
    this.set=function(obj){
        localStorage.setItem(item,JSON.stringify(obj))//将数据存入localstorage里
    }
    this.clear=function(){
        localStorage.removeItem(item)//清除里面的数据
    }
}
export const user_info=new localEvent("data");//创建一个用户信息实例，导出，其他文件成可以调用
