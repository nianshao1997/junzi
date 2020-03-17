const axios = require('axios')

let getData = target => {
    return new Promise((resovle, reject) => {
        axios({
                method: 'get',
                url: `https://ns1997.oss-cn-hangzhou.aliyuncs.com/junzi/json/${target}.json`
                    // responseType: 'stream'
            })
            .then(function(res) {
                console.log(res)
                if (res.status === 200) {
                    resovle(res.data)
                } else {
                    reject('出错了')
                }
            }).catch(err => {
                reject(err)
            })
    })

}

export default getData