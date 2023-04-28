import Banner_Center1 from "./Banner_Center1"
import Banner_Center2 from "./Banner_Center1"
import Banner_Center3 from "./Banner_Center1"


export default function Banner_Center() {
    return (
        <div  id="Banner_bg2">
            <div className="Banner_slideshow">
                <ul className="Banner_slide">
                    <li><Banner_Center1 /></li>
                    <li><Banner_Center2 /></li>
                    <li><Banner_Center3 /></li>
                </ul>
                <p class="controller">
                    <span className="prev">&lang;</span>
                    <span className="next">&rang;</span>
                </p>
            </div>
        </div>

    )
}