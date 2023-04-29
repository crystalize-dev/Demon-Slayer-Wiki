import Icon from "../components/icon/icon";


export const getFullStars = (rate, keys) => {
    const result = []
    const count = Math.floor(rate / 2)

    for (let i = 0; i < count; i++) {
        result.push(<Icon key={keys[i]}>star</Icon>)
    }

    return result
}

export const getEmptyStars = (rate, keys) => {
    const result = []
    const count = Math.ceil(5 - (rate / 2))

    for (let i = 0; i < count; i++) {
        result.push(<Icon style={{fontVariationSettings: "'FILL' 0"}} key={keys[i]}>star</Icon>)
    }

    return result
}