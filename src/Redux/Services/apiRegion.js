import axios from "../../Config/http-common"

const getAll = () => {
    return axios.get("/regions/all")
}

const getId = id => {
    return axios.get(`/regions/${id}`)
}

const create = data => {
    return axios.post("/regions/create", data.regions)
}

const update = (id, data) => {
    return axios.put(`/regions/edit/${id}`, data)
}

const remove = id => {
    return axios.delete(`/regions/delete/${id}`)
}

// const removeAll =  {
//     return axios.delete('/regions')
// }

// const findById = id => {
//     return axios.get(`/regions?id=${id}`)
// }

const apiRegion = {
    getAll,
    getId,
    create,
    update,
    remove
}

export default apiRegion