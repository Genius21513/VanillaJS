const validateObject = (config, schema) => {
    return new Promise((resolve, reject) => {
        const validate = (config, schema) => Object
            .entries(schema)
            .map(([key, validate]) => [
                key,
                !validate.required || (key in config),
                validate(config[key])
            ])
            .filter(([_, ...tests]) => !tests.every(Boolean))
            .map(([key, invalid]) => new Error(`${key} is ${invalid ? 'invalid' : 'required'}.`))

        const errors = validate(config, schema)

        if (errors.length > 0) {
            let errorMessage = ''
            for (const { message } of errors) {
                errorMessage += `   • ${message}\n`
            }
            reject(new Error(`Config is invalid!\n${errorMessage}`))
        } else {
            resolve()
        }
    })
}

export default validateObject
