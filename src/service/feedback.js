import { Message, Loading } from 'element-ui'



// let nsLoading = Loading.service({
//     text: '玩命加载中',
//     spinner: 'el-icon-loading',
//     background: 'rgba(0, 0, 0, 0.7)'
// })

let nsLoading = () => {

    let a = Loading.service({
        text: '玩命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return a
}

let nsMessage = () => {
    Message({
        type: 'error',
        message: '网络错误！请检查网络!',
        showClose: true,
        offset: 50
    })
}



let feedback = {
    nsLoading,
    nsMessage
}

export default feedback