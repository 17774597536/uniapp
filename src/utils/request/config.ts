type EnvType = 'development' | 'production' | 'local'

enum baseUrl {
    'development' = '211',
    'production' = '123'
}

export const getBaseUrl = (env: EnvType, localUrl?: string) => {
    if (env === 'local') {
        return localUrl
    } else {
        return baseUrl[env]

    }
}
