import { Recording } from "~/composables/use-content-fetch"
import contentDisposition from "content-disposition"

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async event => {
    const id = getRouterParam(event, "id")

    let res = await fetch(runtimeConfig.public.apiBase + "content/item/recordings/" + id)
    if (!res.ok) {
        setResponseStatus(event, 404)
        return "Not found"
    }

    const recording: Recording = await res.json()

    res = await fetch(runtimeConfig.public.assetsBase + recording.file.path)
    if (!res.ok || !res.body) {
        setResponseStatus(event, 404)
        return "Not found"
    }

    setResponseHeaders(event, {
        "Content-Disposition": contentDisposition(recording.file.title),
        "Content-Type": recording.file.mime,
    })
    await sendStream(event, res.body)
})
