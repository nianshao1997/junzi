const pinyin = require('pinyin')
import zui from './zui'
import store from '../store/index'
import router from '../router/index'









let search = (id) => {
    // if (id == '') return
    // this.handleSearch(id)
    store.commit('handleSearch', id)
    let reg = /\s/g
    id = id.replace(reg, '')
    let rel = pinyin(id, {
            style: pinyin.STYLE_FIRST_LETTER
        })
        .map(c => c[0])
        .reduce((p, c) => p + c);
    console.log(rel.length);
    let theEnd = zui(rel);
    router.push(`/rezult/${theEnd}`)
}

export default search