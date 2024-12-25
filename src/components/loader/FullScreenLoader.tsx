import { Spinner } from "@nextui-org/spinner";
import './styles.scss'

function FullScreenLoader() {

    return <div className="full-screen-loader">
        <Spinner />
    </div>
}

export default FullScreenLoader;