export const save = async(checkIn) => {
    try {
        return await fetch('/checkIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkIn)
        }).then(res => res.json())
    } catch (err) {
        console.log(err)
    }
};

export const retrieveCheckIns = async() => {
    try {
        return await fetch('/checkIn', {
            method: 'GET'
            // TODO send header with user ID
        }).then(res => res.json())
    } catch (err) {
        console.log(err)
    }
};