type FetchUrl = Parameters<typeof useFetch>[0]
type FetchOptions<T> = Parameters<typeof useFetch<T>>[1]
type FetchData<T> = ReturnType<typeof useFetch<T>>

export function useContentFetch<T>(request: FetchUrl, options?: FetchOptions<T>): FetchData<T> {
    const runtimeConfig = useRuntimeConfig()
    return useFetch<T>(request, { baseURL: runtimeConfig.public.apiBase, ...options })
}

export interface Contact {
    email: string
}

export interface Rehearsal {
    date: string
    location: string
}
