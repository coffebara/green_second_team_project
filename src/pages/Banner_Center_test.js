import Banner_test1 from "./Banner_test1"
import Banner_test2 from "./Banner_test1"
import Banner_test3 from "./Banner_test1"


export default function Banner_Center_test() {
    return (
        <div  id="Banner_bg2">
            <div className="Banner_slideshow">
                <ul className="Banner_slide">
                    <li><Banner_test1 /></li>
                    <li><Banner_test2 /></li>
                    <li><Banner_test3 /></li>
                </ul>
                <p class="controller">
                    <span className="prev">&lang;</span>
                    <span className="next">&rang;</span>
                </p>
            </div>
        </div>

    )
}