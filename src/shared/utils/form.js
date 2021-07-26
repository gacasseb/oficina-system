import axios from 'axios'

export function handleSubmit(url, config) {
    axios[config.method](url, config)
    .then( res => {
        if ( res.status == 200 || res.status == 201 ) {
            if ( config.onSuccess ) {
                config.onSuccess(res)
            }
        }
    })
}