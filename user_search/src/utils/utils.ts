export const handleSuccessRequest = (data: any)=> {
    return {
        data,
        errors:[]
    }
}

export const handleFailRequest = (errors: any)=> {
    return {
        data: {},
        errors
    }
}