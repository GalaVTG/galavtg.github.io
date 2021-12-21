/*
<nav id="navigation">
    <div class="container">
        <div id='menuicon' onclick="onpressMenuIcon()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div class='brand'>
            <img src="/assets/brand.png" />
        </div>
    </div>
    <div id='navigation-items' class="hidden-nav" onclick="onpressMenuIcon()">
        <ul>
            <li class="nav-active">
                <a>Home</a>
            </li>
            <li>
                <a href="">Blogs</a>
            </li>
            <li>
                <a href="">Places</a>
            </li>
            <li>
                <a href="">Gallery</a>
            </li>
        </ul>
    </div>
    <div id="navigation-items-desktop">
        <ul>
            <li>
                <a href="">Gallery</a>
            </li>
            <li>
                <a href="">Places</a>
            </li>
            <li>
                <a href="">Blogs</a>
            </li>
            <li class="nav-active">
                <a>Home</a>
            </li>
        </ul>
    </div>
</nav>
*/
function onpressMenuIcon() {
    document.getElementById('menuicon').classList.toggle('change');
    document.getElementById('navigation-items').classList.toggle('hidden-nav');;  
}
