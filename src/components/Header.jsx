function Header() {
    return (
        <header className="header">
            <h1 className="title">Vegetables</h1>
            <div className="header-right">
                <a href="#"><img src="./img/img_facebook_icon.png" alt="FB"/></a>
                <a href="#"><img src="./img/img_instagram_icon.png" alt="IG"/></a>
                <hr className="line"/>
                <a href="#" target="_blank" class="button">LOGIN</a>
                <a href="#" target="_blank" class="button">JOIN</a>
            </div>
        </header>  
    );
}

export default Header;