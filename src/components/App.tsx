import { FC } from "react"
import { HouseForm } from "./HouseForm"
import { Provider } from "@/components/ui/provider"

const App: FC = () => {
    return (
        <Provider>
            <HouseForm />
        </Provider>
    )
}

export default App
