export default function Footer() {
    return (
        <div className="navbar navbar-expand navbar-light bg-light">
            <div id="Footer_setting">
                <div id="Footer_ul_setting">
                    <ul>
                        <li><img src={process.env.PUBLIC_URL + 'logo192.png'} id="Footer_img"></img></li>
                        <li><img src={process.env.PUBLIC_URL + 'logo512.png'} id="Footer_img"></img></li>
                    </ul>
                </div>
                <div id="Footer_ul_setting">
                    <ul>
                        <li><span id="Footer_span">Support</span></li>
                        <li id="Cursor">Help</li>
                        <li id="Cursor">Advisories</li>
                        <li id="Cursor">Status</li>
                        <li id="Cursor">Contact npm</li>
                    </ul>
                </div>
                <div id="Footer_ul_setting">
                    <ul>
                        <li><span id="Footer_span">Company</span></li>
                        <li id="Cursor">About</li>
                        <li id="Cursor">Blog</li>
                        <li id="Cursor">Press</li>
                    </ul>
                </div>
                <div id="Footer_ul_setting">
                    <ul>
                        <li><span id="Footer_span">Terms & Policy</span></li>
                        <li id="Cursor">Policies</li>
                        <li id="Cursor">Terms of Use</li>
                        <li id="Cursor">Code of Conduct</li>
                        <li id="Cursor">Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}