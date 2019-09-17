import Axios from 'axios'
import urls from './URLs.js'

const size = 10;
const appkey = {
    appkey: 'yangguanghe_1557555860764'
}

const myAjax = Axios.create({
    params: {
        ...appkey
    },
    method: 'get',
    baseURL: urls.baseURL
})

export default {
    findByPage(page=1) {
        return myAjax.get(urls.findByPage, {
            params: {
                ...appkey,
                page,
                size
            }
        })
    },
    updateStu(data) {
        return myAjax.get(urls.updateStu, {
            params: {
                ...appkey,
                ...data
            }
        })
    },
    delBySno(sNo) {
        return myAjax.get(urls.delBySno, {
            params: {
                ...appkey,
                sNo
            }
        })
    },
    stuSearch(search, page) {
        return myAjax.get(urls.stuSearch, {
            params: {
                ...appkey,
                sex: -1,
                search, 
                page,
                size
            }
        })
    },
    addStu(data) {
        return myAjax.get(urls.addStu, {
            params: {
                ...appkey,
                ...data
            }
        })
    }
}