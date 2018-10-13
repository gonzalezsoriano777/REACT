export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id // if have a property or property that are the same you can keep it as 'id' not 'id: id'
    }
}