export default (rel) => {
    let kong = /\s/g
    rel = rel.replace(kong, '')
    let re = /[a-z][0-9]/
    let RE = /[A-Z][0-9]/
    let b = re.test(rel)
    let B = RE.test(rel)
    let shuzi = /\d/
    let shu = shuzi.test(rel)
    let zui
    if (shu) {
        if (b) {
            let e = re.exec(rel)
            let i = rel.indexOf(e[0])
            let p = rel.substr(0, i + 1)
            let n = rel.substr(i + 1, rel.length)
            let z = p + '-' + n
            zui = z.toUpperCase()
        } else if (B) {
            let e = RE.exec(rel)
            let i = rel.indexOf(e[0])
            let p = rel.substr(0, i + 1)
            let n = rel.substr(i + 1, rel.length)
            let z = p + '-' + n
            zui = z.toUpperCase()
        } else {
            zui = rel.toUpperCase()
        }
    } else {
        zui = rel
    }
    return zui
}