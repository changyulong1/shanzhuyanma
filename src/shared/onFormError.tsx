import { AxiosError } from "axios";

export const onFormError = (
    error: AxiosError<ResourceError>,
    fn: (error: ResourceError) => void

) => {
    if (error.response?.status === 442) {
        fn(error.response.data)
    }
}