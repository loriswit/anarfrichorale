type FetchUrl = Parameters<typeof useFetch>[0]
type FetchOptions<T> = Parameters<typeof useFetch<T>>[1]
type FetchData<T> = ReturnType<typeof useFetch<T>>

export function useContentFetch<T>(request: FetchUrl, options?: FetchOptions<T>): FetchData<T> {
    const runtimeConfig = useRuntimeConfig()
    return useFetch<T>(request, { baseURL: runtimeConfig.public.apiBase, ...options })
}

export interface Contact {
    email: string
    telegram: string
}

export interface Rehearsal {
    date: string
    location: string
}

export interface About {
    content: string
}

export interface Event {
    title: string
    date: string
    description: string
}

export interface Break {
    active: boolean
    message: string
}

export interface Sheet {
    title: string
    file: File
    _id: string
}

export type Recording = Sheet

export interface File {
    title: string
    path: string
    size: number
    mime: string
}

export interface Location {
    name: string
    address: string
    osmurl: string
}
