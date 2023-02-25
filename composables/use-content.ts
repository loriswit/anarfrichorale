export function useContent(request: string): Promise<any> {
    const runtimeConfig = useRuntimeConfig()
    return useFetch(request, { baseURL: runtimeConfig.public.apiBase })
}
