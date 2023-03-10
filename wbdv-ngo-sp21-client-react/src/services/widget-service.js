const API_URL = "http://localhost:9090/api"

export const createWidget = (tid, widget) => {
    return fetch(`${API_URL}/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }}).then((response) => response.json());
}

export const findWidgetById = wid => {
    return fetch(`${API_URL}/widgets/${wid}`)
        .then(response => response.json());
}

export const findWidgetsForTopic = tid => {
    return fetch(`${API_URL}/topics/${tid}/widgets`)
        .then(response => response.json());
}

export const findAllWidgets = () => {
    return fetch(`${API_URL}/widgets`)
        .then(response => response.json());
}

export const updateWidget = (wid, widget) => {
    return fetch(`${API_URL}/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

export const deleteWidget = wid => {
    return fetch(`${API_URL}/widgets/${wid}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

export default {
    createWidget,
    findWidgetById,
    findWidgetsForTopic,
    findAllWidgets,
    updateWidget,
    deleteWidget
}